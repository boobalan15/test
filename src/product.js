import React from 'react';

import { Container } from 'react-bootstrap';
import Header from './Header'; // Update the path accordingly
import Intro from './Intro'; // Update the path accordingly
import Category from './Category'; // Update the path accordingly
import PopularProducts from './PopularProducts'; // Update the path accordingly
import Community from './Community'; // Update the path accordingly
import Footer from './end'; // Update the path accordingly

const popularProductsData = {
  imagePaths: [
    './Frame 86 (1).png',
  './Frame 86 (2).png',
  './Frame 86 (3).png',
  './Frame 86 (4).png',
  './Frame 86 (5).png',
  './Frame 86 (6).png',
  './Frame 86.png',
  './green-banana-mix-powder-pouch-package-941934080 1.png'
    // Add other image paths as needed
  ],
  names: [
    'Green Banana Powder 1',
  'Green Banana Powder 2',
  'Green Banana Powder 3',
  'Green Banana Powder 4',
  'Green Banana Powder 5',
  'Green Banana Powder 6',
  'Green Banana Powder 7',
  'Green Banana Powder 8'
    // Add other names as needed
  ],
  costs: [
    '$19.99',
  '$24.99',
  '$14.99',
  '$29.99',
  '$22.99',
  '$17.99',
  '$27.99',
  '$21.99'
    // Add other costs as needed
  ],
};



const Product = () => {
  return (
    <div>
      
      <Header />
      {/* <NavBar/> */}
      

      <Intro />

      <Container>
        <Category />
      </Container>

      <Container>
        {/* Pass the data as props to PopularProducts component */}
        <PopularProducts
          imagePaths={popularProductsData.imagePaths}
          names={popularProductsData.names}
          costs={popularProductsData.costs}
        />
      </Container>

      <Container>
        <Community />
      </Container>

      <Footer />
    </div>
  );
};

export default Product;




