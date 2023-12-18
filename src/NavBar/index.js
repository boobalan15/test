import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export const NavBar = () => {
  return (
    
<Navbar expand="lg" sticky="top" style={{backgroundColor: '#F3DBB9',
         paddingTop: '15px' }}>
<Container style={{}}>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto" style={{ fontWeight: 600, fontSize: '18px' }}>
      <Nav.Link href="#home" className="me-5">Home</Nav.Link>
      <Nav.Link href="#about" className="me-5">About Us</Nav.Link>
      <Nav.Link href="#products" className="me-5">Products</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>

    <Nav className="ml-auto">
      <Nav.Link href="#cart" className="me-3">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Nav.Link>
      <Nav.Link href="#profile">
        <FontAwesomeIcon icon={faUser} />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default NavBar


// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import { NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './land.css';


// import Product from './product'; // Import Product component
// import App from './App'; // Import App component

// export const NavBar = () => {
//   return (
//     <Navbar expand="lg" sticky="top" style={{ backgroundColor: '#F3DBB9', paddingTop: '15px' }}>
//       <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <div>
//             <div className="nav nav-pills   ">
//               <Router>
//                 <div className="nav-item">
//                   <NavLink to="/aboutus" className="nav-link">About us</NavLink>
//                 </div>
//                 <div className="nav-item">
//                   <NavLink to="/contactus" className="nav-link">Contact us</NavLink>
//                 </div>
//                 <div className="nav-item">
//                   <NavLink to="/signup" className="nav-link">Signup</NavLink>
//                 </div>
//                 <div className="nav-item">
//                   <NavLink to="/login" className="nav-link">Login</NavLink>
//                 </div>
//                 <div className="nav-item">
//                   {/* Update NavLink to navigate to Product */}
//                   <NavLink to="/product" className="nav-link">Product</NavLink>
//                 </div>
//                 <div className="nav-item">
//                   {/* Update NavLink to navigate to App */}
//                   <NavLink to="/app" className="nav-link">App</NavLink>
//                 </div>
//                 <br /><br />
//                 <Routes>
//                   {/* <Route path="/aboutus" element={<Landing />} />
//                   <Route path="/contactus" element={<Contactus />} />
//                   <Route path="/signup" element={<SignupComponent />} />
//                   <Route path="/login" element={<MainComponent />} /> */}
//                   <Route path="/product" element={<Product />} />
//                   <Route path="/app" element={<App />} />
//                 </Routes>
//               </Router>
//             </div>
//           </div>

//           <Nav className="ml-auto">
//             <Nav.Link href="#cart" className="me-3">
//               <FontAwesomeIcon icon={faShoppingCart} />
//             </Nav.Link>
//             <Nav.Link href="#profile">
//               <FontAwesomeIcon icon={faUser} />
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;








