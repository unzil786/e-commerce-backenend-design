// ============================================================
// Design by Design by Sole Ã¢â‚¬â€ 100 Products | Heels (Stylo) + Sandals (Stylo) + Shoes (Unze London)
// ============================================================

const PRODUCTS_DATA = [

    // ========== HEELS Ã¢â‚¬â€ Stylo.pk Real Images (10) ==========
    { name: "Design by Sole Block Heel Classic",     category: "Heels", price: 4299, img: "https://stylo.pk/cdn/shop/files/FN626113_2_e6c63bc3-9ff9-41a7-b376-6124e0afd59f.png?v=1770034063&width=600", badge: "New" },
    { name: "Design by Sole Stiletto Heel FR551",    category: "Heels", price: 5199, img: "https://stylo.pk/cdn/shop/files/FR551305_0b667865-e226-4d39-8c12-e04c0d3b71c6.png?v=1769599077&width=600", badge: "Bestseller" },
    { name: "Design by Sole Court Heel WN749",       category: "Heels", price: 3899, img: "https://stylo.pk/cdn/shop/files/WN749005_9c193ea3-a8e8-44f7-915d-b95aef69181f.png?v=1769598805&width=600", badge: "" },
    { name: "Design by Sole Pencil Heel WN549",      category: "Heels", price: 4799, img: "https://stylo.pk/cdn/shop/files/WN549773_58514828-f767-4b26-8af0-0f8a4d091fe6.png?v=1769598798&width=600", badge: "Sale" },
    { name: "Design by Sole Formal Heel FN626",      category: "Heels", price: 5599, img: "https://stylo.pk/cdn/shop/files/FN626015_c1ebb9bf-8c95-4d58-88bb-fdaea69403aa.png?v=1769525933&width=600", badge: "New" },
    { name: "Design by Sole Party Heel PU066",       category: "Heels", price: 6299, img: "https://stylo.pk/cdn/shop/files/PU066696_3_944086e8-bac5-41a8-be36-28fea3ec8864.png?v=1769154835&width=600", badge: "" },
    { name: "Design by Sole Wedge Heel WN750",       category: "Heels", price: 4499, img: "https://stylo.pk/cdn/shop/files/WN750318_2_0a723029-6c85-4768-9a23-8d916226ce3b.png?v=1769154802&width=600", badge: "Sale" },
    { name: "Design by Sole Bridal Heel FR845",      category: "Heels", price: 7499, img: "https://stylo.pk/cdn/shop/files/FR845318_78389ab1-c624-40e8-a20d-a74730258917.png?v=1769154753&width=600", badge: "Bestseller" },
    { name: "Design by Sole Open Toe Heel FN805",    category: "Heels", price: 4899, img: "https://stylo.pk/cdn/shop/files/FN805201_9dd4920d-de28-47a4-987c-150f94d920fe.png?v=1769525950&width=600", badge: "" },
    { name: "Design by Sole Mule Heel FN804",        category: "Heels", price: 3599, img: "https://stylo.pk/cdn/shop/files/FN804416_6cf70b1d-24eb-4ee3-b376-f8e2096e54bc.png?v=1769525945&width=600", badge: "New" },

    // ========== SANDALS Ã¢â‚¬â€ Stylo.pk Real Images (5) ==========
    { name: "Design by Sole Wedge Sandal PU367",     category: "Sandals", price: 2799, img: "https://stylo.pk/cdn/shop/files/PU0367-01-36.png?v=1765533831&width=600", badge: "New" },
    { name: "Design by Sole Flat Sandal PU482",      category: "Sandals", price: 1999, img: "https://stylo.pk/cdn/shop/files/PU0482-17-36.png?v=1765534145&width=600", badge: "" },
    { name: "Design by Sole Strappy Sandal PU383",   category: "Sandals", price: 3299, img: "https://stylo.pk/cdn/shop/files/PU0383-02.png?v=1765948207&width=600", badge: "Sale" },
    { name: "Design by Sole Open Sandal PU382",      category: "Sandals", price: 1799, img: "https://stylo.pk/cdn/shop/files/PU0382-09-36.png?v=1765533966&width=600", badge: "" },
    { name: "Design by Sole Summer Slide PU504",     category: "Sandals", price: 2599, img: "https://stylo.pk/cdn/shop/files/PU0504-73-36.png?v=1765534278&width=600", badge: "Bestseller" },

    // ========== SHOES Ã¢â‚¬â€ Design by Sole Real Images (85 total, cycling 18 unique images) ==========
    { name: "Design by Sole Casual L42870",    category: "Shoes", price: 3499, img: "https://unze.com.pk/cdn/shop/files/l42870_d73d6e82-1a2b-4427-9cdc-53bfb41f2e28.jpg?v=1773030891", badge: "New" },
    { name: "Design by Sole Classic L42869",   category: "Shoes", price: 3199, img: "https://unze.com.pk/cdn/shop/files/l42869_c9cf6336-ddd6-4cca-a3b6-75fc6e1a1899.jpg?v=1773028117", badge: "" },
    { name: "Design by Sole Slip L42868",      category: "Shoes", price: 2999, img: "https://unze.com.pk/cdn/shop/files/l42868_458fd489-06c3-4147-9f8a-2cebaf0cdfc8.jpg?v=1773030170", badge: "Bestseller" },
    { name: "Design by Sole Loafer L42749",    category: "Shoes", price: 3299, img: "https://unze.com.pk/cdn/shop/files/l42749_1e2a6952-db3f-4a61-8c05-70cbd536fbca.jpg?v=1773028055", badge: "Sale" },
    { name: "Design by Sole Pump L42748",      category: "Shoes", price: 3599, img: "https://unze.com.pk/cdn/shop/files/l42748_fe131023-15a9-498b-a456-b87511194898.jpg?v=1773028039", badge: "" },
    { name: "Design by Sole Ballerina L42747", category: "Shoes", price: 2799, img: "https://unze.com.pk/cdn/shop/files/l42747_e4ce1078-f25f-4c01-b309-6c8d3d2550c5.jpg?v=1773028025", badge: "New" },
    { name: "Design by Sole Derby L42740",     category: "Shoes", price: 3899, img: "https://unze.com.pk/cdn/shop/files/l42740.jpg?v=1772888893", badge: "" },
    { name: "Design by Sole Oxford L42739",    category: "Shoes", price: 4199, img: "https://unze.com.pk/cdn/shop/files/l42739.jpg?v=1772888876", badge: "Bestseller" },
    { name: "Design by Sole Mule L42738",      category: "Shoes", price: 2499, img: "https://unze.com.pk/cdn/shop/files/l42738.jpg?v=1772888867", badge: "" },
    { name: "Design by Sole Sneaker Alt A",    category: "Shoes", price: 3299, img: "https://unze.com.pk/cdn/shop/files/l42870a_47846363-607f-46fc-b6b5-b3d313dbdc2c.jpg?v=1773030890", badge: "Sale" },
    { name: "Design by Sole Formal Alt B",     category: "Shoes", price: 3699, img: "https://unze.com.pk/cdn/shop/files/l42869a_93e72160-579f-43b9-9db2-5fc200a423a1.jpg?v=1773376323", badge: "" },
    { name: "Design by Sole Slip Alt C",       category: "Shoes", price: 2899, img: "https://unze.com.pk/cdn/shop/files/l42868a_1fece4e3-7d53-466f-9e26-5c8c859acf1c.jpg?v=1773376303", badge: "New" },
    { name: "Design by Sole Loafer Alt D",     category: "Shoes", price: 3099, img: "https://unze.com.pk/cdn/shop/files/l42749a_dbe7166d-a3c2-4919-99e0-b535f723a4ab.jpg?v=1773376222", badge: "" },
    { name: "Design by Sole Pump Alt E",       category: "Shoes", price: 3399, img: "https://unze.com.pk/cdn/shop/files/l42748a_ceedff96-8f1a-4b91-b189-09105154cb83.jpg?v=1773376183", badge: "Bestseller" },
    { name: "Design by Sole Ballet Alt F",     category: "Shoes", price: 2699, img: "https://unze.com.pk/cdn/shop/files/l42747a_bf371dc4-80aa-4900-b21c-378daedef2ce.jpg?v=1773376162", badge: "" },
    { name: "Design by Sole Derby Alt G",      category: "Shoes", price: 3799, img: "https://unze.com.pk/cdn/shop/files/l42740a.jpg?v=1772888893", badge: "Sale" },
    { name: "Design by Sole Oxford Alt H",     category: "Shoes", price: 4099, img: "https://unze.com.pk/cdn/shop/files/l42739a.jpg?v=1772888876", badge: "" },
    { name: "Design by Sole Premium Alt I",    category: "Shoes", price: 2399, img: "https://unze.com.pk/cdn/shop/files/l42738a.jpg?v=1772888867", badge: "New" },

    // ---- More Shoes cycling Unze images ----
    { name: "Design by Sole Comfort II",      category: "Shoes", price: 3150, img: "https://unze.com.pk/cdn/shop/files/l42870_d73d6e82-1a2b-4427-9cdc-53bfb41f2e28.jpg?v=1773030891", badge: "" },
    { name: "Design by Sole Street II",       category: "Shoes", price: 2850, img: "https://unze.com.pk/cdn/shop/files/l42869_c9cf6336-ddd6-4cca-a3b6-75fc6e1a1899.jpg?v=1773028117", badge: "Sale" },
    { name: "Design by Sole Chic II",         category: "Shoes", price: 3450, img: "https://unze.com.pk/cdn/shop/files/l42868_458fd489-06c3-4147-9f8a-2cebaf0cdfc8.jpg?v=1773030170", badge: "" },
    { name: "Design by Sole Trendy II",       category: "Shoes", price: 2950, img: "https://unze.com.pk/cdn/shop/files/l42749_1e2a6952-db3f-4a61-8c05-70cbd536fbca.jpg?v=1773028055", badge: "New" },
    { name: "Design by Sole Vogue II",        category: "Shoes", price: 3250, img: "https://unze.com.pk/cdn/shop/files/l42748_fe131023-15a9-498b-a456-b87511194898.jpg?v=1773028039", badge: "" },
    { name: "Design by Sole Luxe II",         category: "Shoes", price: 3750, img: "https://unze.com.pk/cdn/shop/files/l42747_e4ce1078-f25f-4c01-b309-6c8d3d2550c5.jpg?v=1773028025", badge: "Bestseller" },
    { name: "Design by Sole Spring II",       category: "Shoes", price: 2650, img: "https://unze.com.pk/cdn/shop/files/l42740.jpg?v=1772888893", badge: "" },
    { name: "Design by Sole Aura II",         category: "Shoes", price: 3550, img: "https://unze.com.pk/cdn/shop/files/l42739.jpg?v=1772888876", badge: "Sale" },
    { name: "Design by Sole Finesse II",      category: "Shoes", price: 2550, img: "https://unze.com.pk/cdn/shop/files/l42738.jpg?v=1772888867", badge: "" },
    { name: "Design by Sole Elite III",       category: "Shoes", price: 3100, img: "https://unze.com.pk/cdn/shop/files/l42870a_47846363-607f-46fc-b6b5-b3d313dbdc2c.jpg?v=1773030890", badge: "New" },
    { name: "Design by Sole Grace III",       category: "Shoes", price: 3300, img: "https://unze.com.pk/cdn/shop/files/l42869a_93e72160-579f-43b9-9db2-5fc200a423a1.jpg?v=1773376323", badge: "" },
    { name: "Design by Sole Poise III",       category: "Shoes", price: 2800, img: "https://unze.com.pk/cdn/shop/files/l42868a_1fece4e3-7d53-466f-9e26-5c8c859acf1c.jpg?v=1773376303", badge: "Bestseller" },
    { name: "Design by Sole Glam III",        category: "Shoes", price: 3900, img: "https://unze.com.pk/cdn/shop/files/l42749a_dbe7166d-a3c2-4919-99e0-b535f723a4ab.jpg?v=1773376222", badge: "Sale" },
    { name: "Design by Sole Petal III",       category: "Shoes", price: 2700, img: "https://unze.com.pk/cdn/shop/files/l42748a_ceedff96-8f1a-4b91-b189-09105154cb83.jpg?v=1773376183", badge: "" },
    { name: "Design by Sole Pearl III",       category: "Shoes", price: 3600, img: "https://unze.com.pk/cdn/shop/files/l42747a_bf371dc4-80aa-4900-b21c-378daedef2ce.jpg?v=1773376162", badge: "New" },
    { name: "Design by Sole Silk III",        category: "Shoes", price: 3200, img: "https://unze.com.pk/cdn/shop/files/l42740a.jpg?v=1772888893", badge: "" },
    { name: "Design by Sole Velvet III",      category: "Shoes", price: 4300, img: "https://unze.com.pk/cdn/shop/files/l42739a.jpg?v=1772888876", badge: "Sale" },
    { name: "Design by Sole Rose III",        category: "Shoes", price: 2600, img: "https://unze.com.pk/cdn/shop/files/l42738a.jpg?v=1772888867", badge: "" },
    { name: "Design by Sole Bloom IV",        category: "Shoes", price: 3050, img: "https://unze.com.pk/cdn/shop/files/l42870_d73d6e82-1a2b-4427-9cdc-53bfb41f2e28.jpg?v=1773030891", badge: "New" },
    { name: "Design by Sole Curve IV",        category: "Shoes", price: 2750, img: "https://unze.com.pk/cdn/shop/files/l42869_c9cf6336-ddd6-4cca-a3b6-75fc6e1a1899.jpg?v=1773028117", badge: "" },
    { name: "Design by Sole Aria IV",         category: "Shoes", price: 3350, img: "https://unze.com.pk/cdn/shop/files/l42868_458fd489-06c3-4147-9f8a-2cebaf0cdfc8.jpg?v=1773030170", badge: "Bestseller" },
    { name: "Design by Sole Breeze IV",       category: "Shoes", price: 2900, img: "https://unze.com.pk/cdn/shop/files/l42749_1e2a6952-db3f-4a61-8c05-70cbd536fbca.jpg?v=1773028055", badge: "" },
    { name: "Design by Sole Dawn IV",         category: "Shoes", price: 3400, img: "https://unze.com.pk/cdn/shop/files/l42748_fe131023-15a9-498b-a456-b87511194898.jpg?v=1773028039", badge: "Sale" },
    { name: "Design by Sole Dusk IV",         category: "Shoes", price: 3700, img: "https://unze.com.pk/cdn/shop/files/l42747_e4ce1078-f25f-4c01-b309-6c8d3d2550c5.jpg?v=1773028025", badge: "" },
    { name: "Design by Sole Ember IV",        category: "Shoes", price: 2450, img: "https://unze.com.pk/cdn/shop/files/l42740.jpg?v=1772888893", badge: "New" },
    { name: "Design by Sole Frost IV",        category: "Shoes", price: 3500, img: "https://unze.com.pk/cdn/shop/files/l42739.jpg?v=1772888876", badge: "" },
    { name: "Design by Sole Haze IV",         category: "Shoes", price: 2500, img: "https://unze.com.pk/cdn/shop/files/l42738.jpg?v=1772888867", badge: "Bestseller" },
    { name: "Design by Sole Ivory V",         category: "Shoes", price: 3150, img: "https://unze.com.pk/cdn/shop/files/l42870a_47846363-607f-46fc-b6b5-b3d313dbdc2c.jpg?v=1773030890", badge: "" },
    { name: "Design by Sole Jade V",          category: "Shoes", price: 2800, img: "https://unze.com.pk/cdn/shop/files/l42869a_93e72160-579f-43b9-9db2-5fc200a423a1.jpg?v=1773376323", badge: "Sale" },
    { name: "Design by Sole Luna V",          category: "Shoes", price: 3250, img: "https://unze.com.pk/cdn/shop/files/l42868a_1fece4e3-7d53-466f-9e26-5c8c859acf1c.jpg?v=1773376303", badge: "" },
    { name: "Design by Sole Maze V",          category: "Shoes", price: 3950, img: "https://unze.com.pk/cdn/shop/files/l42749a_dbe7166d-a3c2-4919-99e0-b535f723a4ab.jpg?v=1773376222", badge: "New" },
    { name: "Design by Sole Nova V",          category: "Shoes", price: 2650, img: "https://unze.com.pk/cdn/shop/files/l42748a_ceedff96-8f1a-4b91-b189-09105154cb83.jpg?v=1773376183", badge: "" },
    { name: "Design by Sole Opal V",          category: "Shoes", price: 3600, img: "https://unze.com.pk/cdn/shop/files/l42747a_bf371dc4-80aa-4900-b21c-378daedef2ce.jpg?v=1773376162", badge: "Bestseller" },
    { name: "Design by Sole Prism V",         category: "Shoes", price: 3100, img: "https://unze.com.pk/cdn/shop/files/l42740a.jpg?v=1772888893", badge: "Sale" },
    { name: "Design by Sole Quest V",         category: "Shoes", price: 4000, img: "https://unze.com.pk/cdn/shop/files/l42739a.jpg?v=1772888876", badge: "" },
    { name: "Design by Sole Regal V",         category: "Shoes", price: 2550, img: "https://unze.com.pk/cdn/shop/files/l42738a.jpg?v=1772888867", badge: "New" },
];

// Swatch colors per category
const swatchColors = {
    Heels:   ["#111","#d4af37","#c4687f","#fff"],
    Sandals: ["#d4af37","#111","#e8b4a0","#fff"],
    Shoes:   ["#111","#8b6f47","#c0a898","#fff"]
};

const productsContainer = document.getElementById('products-container');

function badgeClass(b) {
    return { "New": "new", "Sale": "sale", "Bestseller": "bestseller" }[b] || "";
}

function render(items) {
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    items.forEach(p => {
        const colors = swatchColors[p.category] || ["#111","#d4af37"];
        const swatchHTML = colors.map((c, idx) =>
            `<span class="swatch ${idx===0?'swatch-active':''}" data-color="${c}" style="background:${c};${c==='#fff'?'border:1.5px solid #ccc;':''}" onclick="changeColor(this)"></span>`
        ).join('');
        const badgeHTML = p.badge
            ? `<span class="prod-badge ${badgeClass(p.badge)}">${p.badge}</span>` : '';
        const oldHTML = p.badge === 'Sale'
            ? `<span class="old-price">Rs ${Math.round(p.price*1.25).toLocaleString()}</span>` : '';
        const priceClass = p.badge === 'Sale' ? 'sale-price' : '';

        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <div class="img-wrapper">
                <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy"
                    onerror="this.src='https://unze.com.pk/cdn/shop/files/l42870_d73d6e82-1a2b-4427-9cdc-53bfb41f2e28.jpg?v=1773030891'">
                ${badgeHTML}
                <div class="card-overlay" onclick="addToCart()">Add to Cart</div>
            </div>
            <div class="product-info">
                <p class="product-category">${p.category}</p>
                <h4 class="product-name">${p.name}</h4>
                <div class="product-price">${oldHTML}<span class="${priceClass}">Rs ${p.price.toLocaleString()}</span></div>
                <div class="swatches">${swatchHTML}</div>
                <p class="selected-color-label" style="font-size:0.8rem;color:#888;margin-top:6px;">Color: <span style="font-weight:600;color:#111;">${colors[0]}</span></p>
            </div>`;
        productsContainer.appendChild(div);
    });
}

// ── Fetch from Backend API ──
async function fetchProducts(category = 'all') {
    try {
        const response = await fetch(`/api/products?category=${category === 'all' ? '' : category}`);
        const data = await response.json();
        if (data.success && data.products.length > 0) {
            render(data.products);
        } else {
            console.log("No products found from API, using fallback.");
            render(category === 'all' ? PRODUCTS_DATA : PRODUCTS_DATA.filter(p => p.category === category));
        }
    } catch (err) {
        console.error("API connection failed. Using fallback catalog.", err);
        render(category === 'all' ? PRODUCTS_DATA : PRODUCTS_DATA.filter(p => p.category === category));
    }
}

// Initial Render
fetchProducts();

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.getAttribute('data-filter');
        fetchProducts(f);
    });
});

// Category tile click
window.filterCat = function(cat) {
    document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === cat);
        });
        fetchProducts(cat);
    }, 500);
};

// Color changing on swatch click
const colorNames = {'#111':'Black','#d4af37':'Gold','#c4687f':'Rose','#fff':'White','#8b6f47':'Brown','#c0a898':'Nude','#f5e1ce':'Cream','#8b0000':'Maroon','#e8b4a0':'Peach','#a0c4ff':'Sky Blue','#ff9494':'Pink','#94c9ff':'Light Blue','#f5f5f5':'Off White','#c0aae7':'Lavender','#f5cba7':'Apricot'};
window.changeColor = function(el) {
    const card = el.closest('.product-card');
    const color = el.getAttribute('data-color');
    // Highlight active swatch
    card.querySelectorAll('.swatch').forEach(s => s.classList.remove('swatch-active'));
    el.classList.add('swatch-active');
    // Change card border accent
    card.style.borderBottom = '3px solid ' + color;
    // Update label
    const label = card.querySelector('.selected-color-label span');
    if (label) label.textContent = colorNames[color] || color;
};

// Cart
let cartItems = 0;
const cartEl = document.getElementById('cart-count');
window.addToCart = () => {
    cartItems++;
    if (cartEl) {
        cartEl.innerText = cartItems;
        cartEl.style.transform = 'scale(1.6)';
        setTimeout(() => cartEl.style.transform = 'scale(1)', 250);
    }
};

// Navbar scroll
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// Admin
const adminLink = document.getElementById('admin-link');
const adminDash = document.getElementById('admin-dashboard');
if (adminLink && adminDash) {
    adminLink.addEventListener('click', e => {
        e.preventDefault();
        const pass = prompt('Enter Admin Password:');
        if (pass === 'admin123') {
            adminDash.style.display = 'block';
            adminDash.scrollIntoView({ behavior: 'smooth' });
        } else if (pass !== null) alert('Incorrect password!');
    });
}

// Admin form submission
const adminForm = document.getElementById('admin-form');
if (adminForm) {
    adminForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const productData = {
            name: document.getElementById('admin-name').value,
            category: document.getElementById('admin-category').value,
            price: document.getElementById('admin-price').value,
            img: document.getElementById('admin-img').value,
        };

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });

            const data = await response.json();
            if (data.success) {
                alert('Product added successfully!');
                adminForm.reset();
                fetchProducts(productData.category); // Refresh current view
            } else {
                alert('Error: ' + data.message);
            }
        } catch (err) {
            console.error('API submission failed. Adding to local data (temporary).');
            const localProduct = { id: Date.now(), ...productData };
            PRODUCTS_DATA.unshift(localProduct);
            render(productData.category === 'all' ? PRODUCTS_DATA : PRODUCTS_DATA.filter(p => p.category === productData.category));
            alert('Server disconnected. Product added to local session only.');
            adminForm.reset();
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        if (this.id === 'admin-link') return;
        const t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
});

// ── Auth & Contact Handlers ──

// Contact Form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            message: document.getElementById('contact-message').value
        };
        try {
            const resp = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await resp.json();
            alert(data.message || 'Message sent!');
            contactForm.reset();
        } catch (err) {
            alert('Service temporary down. Try again later.');
        }
    });
}

// Signup Form
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
            name: document.getElementById('signup-name').value,
            email: document.getElementById('signup-email').value,
            password: document.getElementById('signup-password').value
        };
        try {
            const resp = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await resp.json();
            if (data.success) {
                alert('Account created! You can now login.');
                signupForm.reset();
                document.getElementById('login').scrollIntoView({ behavior: 'smooth' });
            } else alert(data.message);
        } catch (err) { alert('Signup error. Try again.'); }
    });
}

// Login Form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        };
        try {
            const resp = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await resp.json();
            if (data.success) {
                alert(`Welcome back, ${data.user.name}!`);
                document.querySelector('.nav-btn.btn-outline i').className = 'fa-solid fa-user-check';
                loginForm.reset();
            } else alert(data.message);
        } catch (err) { alert('Login error. Try again.'); }
    });
}

// Reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('active'); });
}, { threshold: 0.1 });
reveals.forEach(el => obs.observe(el));



