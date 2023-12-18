// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import './products.css';

// const Header = () => {
//   return (
//     <Navbar expand="lg" style={{ backgroundColor: '#F3DBB9', paddingTop: '15px', position: 'fixed', top: "0", zIndex: 1, width: "100%" }}>
//     <Container>
//       <Navbar.Brand href="#home">
//         {/* <img
//           src={logo}
//           width="30"
//           height="30"
//           className="d-inline-block align-top"
//           alt="Logo"
//         /> */}
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="m-auto" style={{ fontWeight: 600, fontSize: '18px' }}>
//           <Nav.Link href="#home" className="me-5">Home</Nav.Link>
//           <Nav.Link href="#about" className="me-5">About Us</Nav.Link>
//           <Nav.Link href="#products" className="me-5">Products</Nav.Link>
//           <Nav.Link href="#contact">Contact</Nav.Link>
//         </Nav>

//         <Nav className="ml-auto">
//           <Nav.Link href="#cart" className="me-3">
//             <FontAwesomeIcon icon={faShoppingCart} />
//           </Nav.Link>
//           <Nav.Link href="#profile">
//             <FontAwesomeIcon icon={faUser} />
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   );
// };

// export default Header;


import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './products.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#F3DBB9', paddingTop: '15px', position: 'fixed', top: "0", zIndex: 1, width: "100%" }}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto" style={{ fontWeight: 600, fontSize: '18px' }}>
          <Nav.Link  className="me-5"> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link  className="me-5"> About Us</Nav.Link>
            <Nav.Link  className="me-5"><Link to="/Products">Products</Link></Nav.Link>
            <Nav.Link >Contact Us</Nav.Link>
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
  );
};

export default Header;
