import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Products.css";

import img_1 from "../../assets/img-1.jpg";
import img_10 from "../../assets/img-10.jpg";
import img_11 from "../../assets/img-11.jpg";
import img_12 from "../../assets/img-12.jpg";
import img_13 from "../../assets/img-13.jpg";
import img_14 from "../../assets/img-14.jpg";
import img_15 from "../../assets/img-15.jpg";
import img_16 from "../../assets/img-16.jpg";
import img_17 from "../../assets/img-17.jpg";
import img_18 from "../../assets/img-18.jpg";
import img_19 from "../../assets/img-19.jpg";
import img_2 from "../../assets/img-2.jpg";
import img_20 from "../../assets/img-20.jpg";
import img_21 from "../../assets/img-21.jpg";
import img_3 from "../../assets/img-3.jpg";
import img_4 from "../../assets/img-4.jpg";
import img_5 from "../../assets/img-5.jpg";
import img_6 from "../../assets/img-6.jpg";
import img_7 from "../../assets/img-7.jpg";
import img_8 from "../../assets/img-8.jpg";
import img_9 from "../../assets/img-9.jpg";

const images = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9,
  img_10,
  img_11,
  img_12,
  img_13,
  img_14,
  img_15,
  img_16,
  img_17,
  img_18,
  img_19,
  img_20,
  img_21,
];

export const allProducts = [
    {
      id: 1,
      name: "Ocean Blue Bead",
      description: "Handcrafted with swirling blue patterns",
      size: "12mm",
      price: "₹150",
      image: images[0],
    },
    {
      id: 2,
      name: "Ruby Red Bead",
      description: "Deep red with gold flecks",
      size: "10mm",
      price: "₹180",
      image: images[1],
    },
    {
      id: 3,
      name: "Emerald Green Bead",
      description: "Translucent green with organic patterns",
      size: "8mm",
      price: "₹120",
      image: images[2],
    },
    {
      id: 4,
      name: "Sunset Orange Bead",
      description: "Gradient orange to yellow",
      size: "15mm",
      price: "₹200",
      image: images[3],
    },
    {
      id: 5,
      name: "Violet Dream Bead",
      description: "Purple with silver inclusions",
      size: "12mm",
      price: "₹170",
      image: images[4],
    },
    {
      id: 6,
      name: "Golden Sparkle Bead",
      description: "Clear glass with gold leaf",
      size: "10mm",
      price: "₹220",
      image: images[5],
    },
    {
      id: 7,
      name: "Silver Mist Bead",
      description: "Frosted glass with silver swirls",
      size: "8mm",
      price: "₹190",
      image: images[6],
    },
    {
      id: 8,
      name: "Earth Tone Bead",
      description: "Brown and beige organic patterns",
      size: "12mm",
      price: "₹160",
      image: images[7],
    },
    {
      id: 9,
      name: "Rainbow Swirl Bead",
      description: "Multicolored spiral design",
      size: "15mm",
      price: "₹240",
      image: images[8],
    },
    {
      id: 10,
      name: "Clear Crystal Bead",
      description: "Perfectly transparent with high clarity",
      size: "10mm",
      price: "₹130",
      image: images[9],
    },
    {
      id: 11,
      name: "Aqua Wave Bead",
      description: "Blue-green mix with ripple texture",
      size: "11mm",
      price: "₹155",
      image: images[10],
    },
    {
      id: 12,
      name: "Charcoal Storm Bead",
      description: "Dark grey with silver streaks",
      size: "9mm",
      price: "₹165",
      image: images[11],
    },
    {
      id: 13,
      name: "Rose Quartz Bead",
      description: "Pale pink with glassy transparency",
      size: "10mm",
      price: "₹175",
      image: images[12],
    },
    {
      id: 14,
      name: "Amber Flame Bead",
      description: "Amber tones with fiery glow",
      size: "13mm",
      price: "₹210",
      image: images[13],
    },
    {
      id: 15,
      name: "Cobalt Twist Bead",
      description: "Deep blue with white spiral",
      size: "12mm",
      price: "₹185",
      image: images[14],
    },
    {
      id: 16,
      name: "Frosty Lavender Bead",
      description: "Matte finish with purple hues",
      size: "10mm",
      price: "₹150",
      image: images[15],
    },
    {
      id: 17,
      name: "Neon Splash Bead",
      description: "Bright neon mix of colors",
      size: "14mm",
      price: "₹250",
      image: images[16],
    },
    {
      id: 18,
      name: "Smoke Grey Bead",
      description: "Dark and mysterious matte glass",
      size: "9mm",
      price: "₹140",
      image: images[17],
    },
    {
      id: 19,
      name: "Lemon Drop Bead",
      description: "Yellow and transparent, like candy",
      size: "10mm",
      price: "₹135",
      image: images[18],
    },
    {
      id: 20,
      name: "Pearl White Bead",
      description: "Elegant and luminous white glass",
      size: "12mm",
      price: "₹190",
      image: images[19],
    },
    {
      id: 21,
      name: "Galaxy Dust Bead",
      description: "Dark base with shimmering specs",
      size: "15mm",
      price: "₹270",
      image: images[20],
    },
  ];


const Products = () => {
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState(allProducts.slice(0, 6));
  const [showAll, setShowAll] = useState(false);

  const handleSeeMore = () => {
    if (showAll) {
      setVisibleProducts(allProducts.slice(0, 6));
    } else {
      setVisibleProducts(allProducts);
    }
    setShowAll(!showAll);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2 className="section-title">Our Glass Beads Collection</h2>
        <p className="section-subtitle">Handcrafted with precision and artistry</p>
        <div className="divider-line"></div>
      </div>

      <div className="products-grid">
        {visibleProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="card-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "placeholder.jpg";
                }}
              />
            </div>
            <div className="card-body">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-meta">
                <span className="meta-size">Size: {product.size}</span>
                <span className="meta-price">{product.price}/kg</span>
              </div>
              <button
                className="product-btn"
                onClick={() => handleProductClick(product.id)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <button className="view-more-btn" onClick={handleSeeMore}>
          {showAll ? "Show Less" : "View More"}
          <FiChevronDown className={`view-more-icon ${showAll ? "flipped" : ""}`} />
        </button>
      </div>
    </section>
  );
};

export default Products;