import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    title: 'SONY WH-1000XM5 WIRELESS HEADPHONES BLACK',
    price: '299,99 €',
    rating: '5.0',
    reviews: '(41)',
    badge: 'BESTSELLER',
    badgeClass: 'badge-bestSeller',
    topBadge: 'NEW',
    topBadgeClass: 'badge-new',
    statusColor: 'green',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 2,
    title: 'APPLE MACBOOK AIR M2 13-INCH SILVER',
    price: '1.199,99 €',
    rating: '5.0',
    reviews: '(41)',
    badge: null,
    statusColor: 'orange',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 3,
    title: 'APPLE IPHONE 15 PRO MAX 256GB BLACK TITANIUM',
    price: '1.449,95 €',
    rating: '5.0',
    reviews: '(41)',
    badge: 'RECOMMENDATION',
    badgeClass: 'badge-recommendation',
    statusColor: 'green',
    image: 'https://images.unsplash.com/photo-1696429175928-7c3e92a1c2c9?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 4,
    title: 'APPLE AIRPODS PRO 2ND GENERATION',
    price: '249,95 €',
    originalPrice: '399,00 €',
    rating: '5.0',
    reviews: '(41)',
    badge: '-44%',
    badgeClass: 'badge-discount',
    statusColor: 'red',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

function App() {
  return (
    <div className="app">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-item"><span className="icon">↩</span> 100 DAYS RETURN POLICY</div>
        <div className="top-bar-item"><span className="icon">🌱</span> CLIMATE-NEUTRAL SHIPPING</div>
        <div className="top-bar-item"><span className="icon">⚡</span> FLASH SHIPPING UNTIL 3 PM</div>
        <div className="top-bar-item"><span className="icon">📦</span> FREE RETURNS (DE)</div>
      </div>

      {/* Header */}
      <header className="main-header">
        <div className="header-left">
          <span>Services <span className="arrow">⌄</span></span>
          <span>About Us <span className="arrow">⌄</span></span>
          <span>Blog <span className="arrow">⌄</span></span>
        </div>
        <div className="header-center">
          <h1>ALPHATRAIL</h1>
        </div>
        <div className="header-right">
          <span>DE <span className="arrow">⌄</span></span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z"></path></svg>
          <div className="cart-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="cart-badge">2</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-links">
          <a href="#">Categories</a>
          <a href="#">Brands</a>
          <a href="#">Gender</a>
          <a href="#">Features</a>
          <a href="#">Bestsellers</a>
          <a href="#">Accessories</a>
          <a href="#" className="sale-link">% Sale</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search on Alphatrail.com..." />
          <button>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>BE SMART.<br />BE<br />CONNECTED.</h2>
          <p>Discover cutting-edge electronics that perfectly complement your digital lifestyle and keep you ahead of the curve.</p>
          <button className="hero-btn">DISCOVER ELECTRONICS</button>
        </div>
        <div className="scroll-down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-header">
          <h3>YOU MIGHT ALSO LIKE</h3>
          <a href="#" className="discover-link">DISCOVER ALL ELECTRONICS NOW →</a>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                {product.topBadge && <span className={`badge ${product.topBadgeClass}`}>{product.topBadge}</span>}
                {product.badge && <span className={`badge ${product.badgeClass}`} style={{ top: product.topBadge ? '30px' : '10px' }}>{product.badge}</span>}
                
                <div className="rating">
                  <span className="star">★</span> {product.rating} {product.reviews}
                </div>
                
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <div className={`status-dot ${product.statusColor}`}></div>
                <h4>{product.title}</h4>
                <div className="price-container">
                  {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                  <span className={`price ${product.originalPrice ? 'discount' : ''}`}>
                    {product.originalPrice ? '' : 'From '}{product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <h2>ALPHATRAIL</h2>
            <p>Your trusted partner for premium electronics and cutting-edge technology solutions.</p>
            <div className="social-icons">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"></path></svg>
            </div>
          </div>
          <div className="footer-col">
            <h4>PRODUCTS</h4>
            <ul>
              <li><a href="#">Smartphones</a></li>
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Gaming</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col newsletter-col">
            <h4>NEWSLETTER</h4>
            <p>Stay updated with our latest products and offers.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2024 ALPHATRAIL. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Imprint</a>
          </div>
          <div className="footer-bottom-right">
            <div className="payment-icon">VISA</div>
            <div className="payment-icon">MC</div>
            <div className="payment-icon">PayPal</div>
            <div className="payment-icon">Pay</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;