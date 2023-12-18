import React from 'react';

import './products.css';
import { Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const imagePaths = [
    './Frame 86 (1).png',
    './Frame 86 (2).png',
    './Frame 86 (3).png',
    './Frame 86 (4).png',
    './Frame 86 (5).png',
    './Frame 86 (6).png',
    './Frame 86.png',
    './green-banana-mix-powder-pouch-package-941934080 1.png'
  ];
  
  const names = [
    'Green Banana Powder 1',
    'Green Banana Powder 2',
    'Green Banana Powder 3',
    'Green Banana Powder 4',
    'Green Banana Powder 5',
    'Green Banana Powder 6',
    'Green Banana Powder 7',
    'Green Banana Powder 8'
  ];
  
  const costs = [
    '$19.99',
    '$24.99',
    '$14.99',
    '$29.99',
    '$22.99',
    '$17.99',
    '$27.99',
    '$21.99'
  ];

const PopularProducts = ({ imagePaths, names, costs }) => {
  return (
    
    <div className="popular-container">
        
  <div className="pop-wrapper">
    {imagePaths.map((imagePath, index) => {
      return (
        <div style={{ display: "flex", flexDirection: "column" }} className="pop-container" key={index}>
          <img src={require(`${imagePath}`)} alt={`Image ${index + 1}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5px" }} />
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Product Details (Name, Cost, +/- Buttons) */}
            <div style={{ width: "249px", height: "auto" }}>
              <p style={{ fontWeight: "600", fontSize: "24px", lineHeight: "29.26px" }}>{names[index]}</p>
              <p style={{ fontWeight: "600", fontSize: "24px", lineHeight: "29.26px" }}>{costs[index]}</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
    <button
      style={{
        width: "24px",
        height: "24px",
        background: "#F5F2ED",
        borderRadius: "50%",
        marginRight: "10px",
        color: "var(--black, #333)",
        fontFamily: "Montserrat",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        border: "none", // Remove circular border
        padding: "0", // Remove padding
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      -
    </button>
    <div
      style={{
        width: "48px",
        height: "24px",
        background: "#FFC6C5",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "var(--black, #333)",
        fontFamily: "Montserrat",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        border: "none", // Remove circular border
        padding: "0", // Remove padding
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

      }}
    >
       <p style={{ margin: 0 }}>0</p>
    </div>
    <button
      style={{
        width: "24px",
        height: "24px",
        background: "#F5F2ED",
        borderRadius: "50%",
        marginLeft: "10px",
        color: "var(--black, #333)",
        fontFamily: "Montserrat",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        border: "none", // Remove circular border
        padding: "0", // Remove padding
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      +
    </button>
  </div>
  <button
  style={{
    width: "77px",
    height: "33px",
    padding: "8px 24px",
    borderRadius: "40px",
    background: "#A5BE6A",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    border: "none", // Remove circular border
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginLeft: "-10px",
  }}
>
  Buy
</button>

</div>
        </div>


<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginBottom: "110px" }}>
  <button
    style={{
      width: "40px",
      height: "38px",
      padding: "10px",
      borderRadius: "40px",
      gap: "10px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      background: "white", // You can set a background color if needed
      border: "none", // Remove circular border
      cursor: "pointer", // Add cursor pointer on hover
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src={require('./Vector.png')} // Replace 'Vector.png' with your image path
      alt="Heart Icon"
      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
    />
  </button>
</div>




          </div>
        </div>
      );
    })}
  </div>
</div>
  );
};

export default PopularProducts;
