import { useState } from 'react';

function Product() {
  const [selectedSize, setSelectedSize] = useState(9);
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [mainImage, setMainImage] = useState("https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png");
  
  const shoeSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];
  const shoeColors = ['black', 'white', 'red'];
  
  const thumbnails = [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be30b/air-force-1-07-mens-shoes-5QFp5Z.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1c1e5f55-99c2-4522-a4b7-0ba9d9f82950/air-force-1-07-mens-shoes-5QFp5Z.png"
  ];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Only allow numbers
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const initiateSTKPush = () => {
    if (!phoneNumber) {
      setMessage('Please enter your phone number to proceed');
      return;
    }

    if (phoneNumber.length < 10) {
      setMessage('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    setMessage('Processing payment...');

    // Simulate STK push request
    // TODO: Implement STK push request
    setTimeout(() => {
      setIsLoading(false);
      setMessage('STK push sent to your phone. Please complete the payment.');
    }, 2000);
  };

  return (
    <div className="product-container">
      <div className="product-images">
        <div className="main-image">
          <img src={mainImage} alt="Nike Air Force 1" />
        </div>
        <div className="thumbnail-images">
          {thumbnails.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Nike Air Force 1 View ${index + 1}`} 
              onClick={() => handleThumbnailClick(image)}
              style={{ border: mainImage === image ? '2px solid black' : 'none' }}
            />
          ))}
        </div>
      </div>

      <div className="product-details">
        <h1>Nike Air Force 1 '07</h1>
        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="review-count">(2,458 Reviews)</span>
        </div>
        <div className="product-price">$110.00</div>
        
        <div className="product-description">
          <p>The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.</p>
        </div>
        
        <div className="product-colors">
          <h3>Color: {selectedColor}</h3>
          <div className="color-options">
            {shoeColors.map(color => (
              <div 
                key={color} 
                className={`color-circle ${color} ${selectedColor === color ? 'selected' : ''}`}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="product-sizes">
          <h3>Select Size</h3>
          <div className="size-options">
            {shoeSizes.map(size => (
              <div 
                key={size} 
                className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-quantity">
          <h3>Quantity</h3>
          <div className="quantity-selector">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
        
        <div className="phone-number-container">
          <h3>Payment Details</h3>
          <p className="payment-info">Enter your M-Pesa phone number to pay and checkout</p>
          <div className="phone-input">
            <input 
              type="text" 
              placeholder="Enter phone number e.g. 07XXXXXXXX" 
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={12}
            />
          </div>
          {message && <p className={`payment-message ${isLoading ? 'loading' : ''}`}>{message}</p>}
        </div>
        
        <div className="product-actions">
          <button 
            className="buy-now" 
            onClick={initiateSTKPush}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Buy Now'}
          </button>
        </div>
        
        <div className="product-info">
          <div className="info-item">
            <h3>Product Details</h3>
            <ul>
              <li>Foam midsole</li>
              <li>Perforations on the toe</li>
              <li>Rubber sole</li>
              <li>Color Shown: White/White</li>
              <li>Style: 315122-111</li>
            </ul>
          </div>
          
          <div className="info-item">
            <h3>Delivery & Returns</h3>
            <p>Free standard shipping on orders $50+ and free 60-day returns for Nike Members.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product; 