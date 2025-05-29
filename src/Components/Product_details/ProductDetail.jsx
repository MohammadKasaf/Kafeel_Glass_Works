import { useEffect, useState } from "react";
import { FiArrowLeft, FiShoppingCart } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { allProducts } from "../Product_List/Products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = allProducts.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleBuyNow = () => {
    const phoneNumber = "919719936609"; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in this product:

🛍 *${product.name}*
💵 *Price:* ${product.price}
📏 *Size:* ${product.size}
🖼 *Image:* ${product.image}

Please let me know how to proceed.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found-container">
        <h2>Product Not Found</h2>
        <button onClick={handleBack} className="back-button">
          <FiArrowLeft /> Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button onClick={handleBack} className="back-button">
        <FiArrowLeft /> Back
      </button>

      <div className="product-content">
        <div className="product-gallery">
          <div
            className={`main-image-container ${zoom ? "zoomed" : ""}`}
            onClick={() => setZoom(!zoom)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="main-product-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "placeholder.jpg";
              }}
            />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="price-section">
            <span className="current-price">{product.price}</span>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="product-specs">
            <div className="spec-item">
              <span className="spec-label">Size:</span>
              <span className="spec-value">{product.size}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Material:</span>
              <span className="spec-value">Premium Glass</span>
            </div>
          </div>

          <button className="buy-now-button" onClick={handleBuyNow}>
            <FiShoppingCart className="cart-icon" />
            Buy Now
          </button>
        </div>
      </div>

      <div className="product-details-section">
        <h3 className="details-title">Product Details</h3>
        <div className="details-content">
          <p>
            {product.details ||
              "This handcrafted glass bead features a unique design that catches the light beautifully. Each bead is carefully inspected for quality before shipping."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
