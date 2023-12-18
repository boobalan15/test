import React from 'react';

import {  Container, Button, Image, Row, Col } from 'react-bootstrap';
import mainImage from '../millet flour hero.png';


export const Home = () => {
  return (
    <Container fluid style={{ backgroundColor: '#F3DBB9', maxHeight: '73vh' }}>
    <Row className="align-items-start">
      {/* Image Column */}
      <Col xs={12} md={6} className="d-flex align-items-center" >
        <Image src={mainImage} className="mr-3" width="650" height="550" style={{ marginTop: '80px', marginLeft: '80px' }} />
      </Col>

      {/* Content Column */}
      <Col xs={12} md={6} className="d-flex flex-column justify-content-start" >
        <h2 style={{ fontSize: '54px', fontWeight: 600, maxWidth: '585px', marginTop: '160px', marginLeft: '60px' }}>
          Lets Step Up your Health and Lifestyle
        </h2>

        <p style={{ maxWidth: '525px', fontFamily: '', fontWeight: 400, fontSize: '18px', marginLeft: '60px' }}>
          Lorem ipsum dolor sit amet consectetur. Enim nisl sed vestibulum volutpat interdum quam
          adipiscing sit. Amet nibh faucibus feugiat viverra.
        </p>

        {/* Buttons row */}
        <div className="d-flex justify-content-start mt-3 text-left" style={{ marginLeft: '60px' }}>
          <Button
            variant="primary"
            className="me-4 primary"
            style={{
              width: '170px',
              fontSize: '20px',
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
              boxShadow: '4px 4px 12px 0px #00000026',
              borderRadius: '8px',
              padding: '8px 32px 8px 32px',
              fontWeight: '600',
            }}>
            
            Shop Now
          </Button>
          <Button
            variant="secondary"
            style={{
                width: '170px',
                border: '2px solid black',
                fontSize: '20px',
                borderRadius: '8px',
                background: 'transparent',
                color: 'black',
                fontWeight: '600',
            }}
          >
            Explore
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
  )
}
