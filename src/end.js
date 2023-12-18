import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './products.css';

import icon1 from './Icon.png';
import icon2 from './Icon2.png';
import icon3 from './Icon3.png';
import icon4 from './Icon4.png';
import icon5 from './Icon5.png';

const End= ({ iconPaths }) => {
  return (
    <div className="container-styles" style={{ bottom: '20px' }}>
        <h3 className="text-center mb-4" style={{ color: 'white', fontSize: '34px', marginTop: '30px' }}>
          Nayah Food
        </h3>

        <Row className="text-center mb-4" style={{ fontSize: '24px', fontWeight: '600', color: 'white', justifyContent: 'center' }}>
          {/* 5 Text Contents in a Row */}
          <Col xs={12} md={1} className="mb-3 me-5">
            <p>Service</p>
          </Col>
          <Col xs={12} md={1} className="mb-3 me-5">
            <p>Product</p>
          </Col>
          <Col xs={12} md={1} className="mb-3 me-5">
            <p>Company</p>
          </Col>
          <Col xs={12} md={1} className="mb-3 me-5">
            <p>Legal</p>
          </Col>
          <Col xs={12} md={1} className="mb-3">
            <p>Contact</p>
          </Col>
        </Row>

        <Row className="text-center mb-4 justify-content-center">
  {/* 5 Images in a Row */}
  <Col xs={12} md={1} className="mb-3 me-2">
    <Image src={icon4} alt="Shield" fluid />
  </Col>
  <Col xs={12} md={1} className="mb-3 me-2">
    <Image src={icon1} alt="Envelope" fluid />
  </Col>
  <Col xs={12} md={1} className="mb-3 me-2">
    <Image src={icon5} alt="Clock" fluid />
  </Col>
  <Col xs={12} md={1} className="mb-3 me-2">
    <Image src={icon3} alt="Calendar" fluid />
  </Col>
  <Col xs={12} md={1} className="mb-3 me-2">
    <Image src={icon2} alt="Comment" fluid />
  </Col>
</Row>


        <Row className="text-center" style={{ fontSize: '20px', fontWeight: '500', color: 'white', marginBottom: '-10px' }}>
        <Col xs={12} md={4} className="mb-3">
          <p>Terms & Services</p>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <p>All copyrights are claimed @ 2023</p>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <p>Privacy Policy</p>
        </Col>
      </Row>

      </div>
  );
};

export default End;
