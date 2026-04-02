const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// ── Cloudinary Configuration ───────────────────────────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'design_by_sole_products',
    allowed_formats: ['jpg', 'png', 'webp'],
  },
});

const upload = multer({ storage: storage });

// â”€â”€ MongoDB Connection ───────────────────────────────────────
if (!process.env.MONGODB_URI) {
  console.warn('⚠️  MONGODB_URI is not defined in .env. Falling back to local JSON data mode.');
} else {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('✅ Connected to MongoDB');
    seedDatabase(); // Initial seed if empty
  }).catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
}

// Optional Seeding Logic
async function seedDatabase() {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      const initialData = require('./backend/data/products.json').products;
      await Product.insertMany(initialData);
      console.log('📦 Database seeded with initial product data.');
    }
  } catch (err) {
    console.warn('⚠️ Seeding failed:', err.message);
  }
}

// ── Models ────────────────────────────────────────────────────
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  badge: { type: String, default: "" },
  colors: [String],
  sizes: [Number],
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', ProductSchema);

// In-memory fallback (only if DB is down)
let localProducts = require('./backend/data/products.json').products;
let localOrders = [];
let localContactMessages = [];
let localUsers = [];

// ── API Routes ─────────────────────────────────────────────────

// GET all products
app.get('/api/products', async (req, res) => {
  try {
    const { category, search } = req.query;
    let filter = {};
    if (category && category !== 'all') filter.category = category;
    if (search) filter.name = { $regex: search, $options: 'i' };
    
    // Attempt DB first
    if (mongoose.connection.readyState === 1) {
      const products = await Product.find(filter);
      return res.json({ success: true, count: products.length, products });
    }

    // Fallback if DB is down
    let result = [...localProducts];
    if (category && category !== 'all') result = result.filter(p => p.category === category);
    if (search) result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    
    res.json({ success: true, count: result.length, products: result, source: 'local' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET single product
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST new product (with Cloudinary image upload)
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const { name, category, price, badge, colors, sizes, stock } = req.body;
    const imgUrl = req.file ? req.file.path : req.body.img; // Use uploaded file path or fallback to URL

    const newProduct = new Product({
      name,
      category,
      price: Number(price),
      img: imgUrl,
      badge,
      colors: colors ? colors.split(',') : [],
      sizes: sizes ? sizes.split(',').map(Number) : [],
      stock: Number(stock) || 0,
    });

    await newProduct.save();
    res.status(201).json({ success: true, product: newProduct });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE product
app.delete('/api/products/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      await Product.findByIdAndDelete(req.params.id);
    } else {
      localProducts = localProducts.filter(p => p.id != req.params.id);
    }
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── NEW: Auth & Interaction Routes ─────────────────────────────────

// POST contact
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = { id: Date.now(), name, email, message, date: new Date() };
  localContactMessages.push(newMessage);
  console.log('📬 [Contact Message]:', newMessage);
  res.json({ success: true, message: 'Message received! Thank you.' });
});

// POST signup
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (localUsers.find(u => u.email === email)) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }
  const newUser = { id: Date.now(), name, email, password };
  localUsers.push(newUser);
  res.status(201).json({ success: true, message: 'Account created successfully!' });
});

// POST login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = localUsers.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, message: 'Login successful!', user: { id: user.id, name: user.name, email: user.email } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
