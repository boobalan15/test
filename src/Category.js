import React from 'react';

import './products.css';


const Category = () => {
  return (
    <div>
        
<h1 className="category">
  Category
</h1>

<div className="main-container" style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
  <div className="sub-container">
    <div className="category-container" style={{ position: 'relative', width: '100%', height: '100%', bottom: 0 }}>
      <img
        src={require('./image 6.png')}
        alt="Millet Flour Packaging"
        className="product-images"
      />
      <h3>Grains</h3>
    </div>
  </div>

  <div className="sub-container">
    <div className="category-container" style={{ position: 'relative', width: '100%', height: '100%', bottom: 0 }}>
      <img
        src={require('./image 7.png')}
        alt="Millet Flour Packaging"
        className="product-images"
      />
      <h3>Granule</h3>
    </div>
  </div>

  <div className="sub-container">
    <div className="category-container" style={{ position: 'relative', width: '100%', height: '100%', bottom: 0 }}>
      <img
        src={require('./image 7 (1).png')}
        alt="Millet Flour Packaging"
        className="product-images"
      />
      <h3>Flours</h3>
    </div>
  </div>

  <div className="sub-container">
    <div className="category-container" style={{ position: 'relative', width: '100%', height: '100%', bottom: 0 }}>
      <img
        src={require('./image 7 (2).png')}
        alt="Millet Flour Packaging"
        className="product-images"
      />
      <h3>Drinks</h3>
    </div>
  </div>
</div>
<img
  src={require('./millet-flour-packaging--379111723-removebg-preview 1.png')}
  alt="Millet Flour Packaging"
  className="product-image"
/>

<h1 className="popular-products-container single-line-text">
  Popular Products
</h1>
     
    </div>
  );
};

export default Category;
