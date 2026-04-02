// Removed Unsplash sources for stability.
// Generate reliable random images using Picsum

const categories = ['Casual', 'Evening', 'Party', 'Kids', 'Summer', 'Traditional'];

const adjectives = ['Elegant', 'Classic', 'Modern', 'Flowing', 'Chic', 'Vintage', 'Sleek', 'Graceful', 'Radiant', 'Stunning', 'Cute', 'Adorable', 'Playful'];
const nouns = ['Silhouette', 'Gown', 'Wrap Dress', 'Midi', 'Maxi', 'Sundress', 'Cocktail Dress', 'A-Line', 'Slip Dress', 'Shift Dress', 'Frock', 'Tutu', 'Mini Dress', 'Shalwar Kameez', 'Kurti'];

// Function to generate random number
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate 200 dress ideas
const products = [];
for (let i = 1; i <= 200; i++) {
    const category = categories[random(0, categories.length - 1)];
    const name = `${adjectives[random(0, adjectives.length - 1)]} ${nouns[random(0, nouns.length - 1)]}`;
    const price = random(49, 299) + 0.99;
    // Reliable images focusing precisely on the selected category
    let imgUrl = "";
    let imgHoverUrl = "";

    // Exact premium URLs perfectly matched to exactly what the user wants!
    const kidsImgs = [
        "kids_fancy.png", // The highly premium generated one
        "https://images.pexels.com/photos/1620815/pexels-photo-1620815.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/459957/pexels-photo-459957.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/3662828/pexels-photo-3662828.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    ];

    const actressImgs = [
        "https://images.pexels.com/photos/2539177/pexels-photo-2539177.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", 
        "https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop", 
        "https://images.pexels.com/photos/13062512/pexels-photo-13062512.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/9312152/pexels-photo-9312152.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/9491845/pexels-photo-9491845.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/13601445/pexels-photo-13601445.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/14480075/pexels-photo-14480075.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        "https://images.pexels.com/photos/7311756/pexels-photo-7311756.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    ];

    if (category === "Kids") {
        imgUrl = kidsImgs[i % kidsImgs.length];
        imgHoverUrl = kidsImgs[(i + 1) % kidsImgs.length];
    } else {
        // Use Pakistani Actresses and gorgeous Eastern Fashion models for ALL other categories!
        imgUrl = actressImgs[i % actressImgs.length];
        imgHoverUrl = actressImgs[(i + 1) % actressImgs.length];
    }

    const badgeTypes = ['New', 'Sale', 'Bestseller', '', '', ''];
    let badge = badgeTypes[random(0, badgeTypes.length - 1)];

    products.push({
        id: i,
        name: name,
        category: category,
        price: price,
        img: imgUrl,
        imgHover: imgHoverUrl,
        badge: badge
    });
}

// Function to render products
const productsContainer = document.getElementById('products-container');

function displayProducts(productArray) {
    productsContainer.innerHTML = '';
    productArray.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <div style="position: relative; overflow: hidden;" class="img-wrapper">
                <img src="${product.img}" alt="${product.name}" class="product-img img-main" loading="lazy" style="width: 100%; display: block;">
                <img src="${product.imgHover}" alt="${product.name} hover" class="product-img img-hover" loading="lazy" style="width: 100%; display: block;">
                ${product.badge ? '<span class="product-badge ' + product.badge.toLowerCase() + '">' + product.badge + '</span>' : ''}
                <span class="price-tag-badge"><i class="fa-solid fa-tag"></i> Rs ${product.price.toFixed(0)}</span>
                
                <div class="quick-view">
                    <button class="quick-view-btn" onclick="alert('Quick View Opened!')"><i class="fa-solid fa-eye"></i> Quick View</button>
                    <button class="quick-view-btn" onclick="alert('Added to Wishlist!')"><i class="fa-solid fa-heart"></i> Wishlist</button>
                </div>
            </div>
            <div class="product-info" style="padding: 1.5rem 1rem;">
                <p class="product-category">${product.category}</p>
                <h4 class="product-name">${product.name}</h4>
                <div class="color-swatches">
                    <span class="swatch" style="background:#000;" title="Black"></span>
                    <span class="swatch" style="background:#d4af37;" title="Gold"></span>
                    <span class="swatch" style="background:#c0a080;" title="Nude"></span>
                    <span class="swatch" style="background:#e74c3c;" title="Red"></span>
                </div>
                <div class="price-row" style="margin-top: 1rem; border: none; padding-top: 0;">
                    <button class="buy-btn" style="width: 100%; font-size: 1.1rem; padding: 0.8rem;" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(div);
    });
}

// Initial render
displayProducts(products);

// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(p => p.category === filterValue);
            displayProducts(filteredProducts);
        }
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Admin Panel Logic
const adminLink = document.getElementById('admin-link');
const adminDashboard = document.getElementById('admin-dashboard');
const adminForm = document.getElementById('admin-form');

if (adminLink) {
    adminLink.addEventListener('click', function(e) {
        e.preventDefault();
        const password = prompt("Admin Authentication\nEnter Password (Hint: admin123):");
        if(password === "admin123") {
            adminDashboard.style.display = "block";
            adminDashboard.scrollIntoView({ behavior: 'smooth' });
        } else if (password !== null) {
            alert("Access Denied! Incorrect password.");
        }
    });
}

if (adminForm) {
    adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('admin-name').value;
        const category = document.getElementById('admin-category').value;
        const price = parseFloat(document.getElementById('admin-price').value);
        let img = document.getElementById('admin-img').value;

        if(!img) {
            img = "https://picsum.photos/seed/admin1/400/600";
        }

        const newProduct = {
            id: products.length + 1,
            name: name,
            category: category,
            price: price,
            img: img
        };

        products.unshift(newProduct);
        
        // Reset filter
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
        
        displayProducts(products);
        
        alert("Success! " + name + " has been added to the catalog.");
        adminForm.reset();
        
        // Scroll to the newly added product
        document.getElementById('products-container').scrollIntoView({ behavior: 'smooth' });
    });
}

// --- UNIQUE FEATURES ---

// 1. Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeToggle.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// 2. Cart logic
let cartItems = 0;
const cartCountElement = document.getElementById('cart-count');

window.addToCart = function() {
    cartItems++;
    if(cartCountElement) {
        cartCountElement.innerText = cartItems;
        cartCountElement.style.transform = "scale(1.5)";
        setTimeout(() => cartCountElement.style.transform = "scale(1)", 200);
    }
}

// 3. Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
} else {
    revealElements.forEach(el => el.classList.add('active'));
}
