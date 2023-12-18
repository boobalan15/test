import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ThreeFlexboxesRow = () => {
    const flexBoxStyle = {
        width: '350px',
        height: '121px',
        
        padding: '24px',
        borderRadius: '8px',
        background: 'white',
        boxShadow: '6px 6px 12px 0px #0000001A',
      };
    
  return (
    <Container fluid style={{marginTop:'140px'}}>
      <Row style={{marginLeft:'180px'}}>
        {/* First Flexbox */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center me-5" style={flexBoxStyle}>

         
          <div className="d-flex justify-content-between">
            <p style={{fontSize:'60px', fontWeight:'600'}}>100%</p>
            <p style={{fontSize:'28px', fontWeight:'600',marginLeft:'20px'}}>Organic products</p>
          </div>
        </Col>

        {/* Second Flexbox */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center me-5" style={flexBoxStyle}>

          <div className="d-flex justify-content-between">
            <p style={{fontSize:'60px', fontWeight:'600'}}>200+</p>
            <p style={{fontSize:'28px', fontWeight:'600',marginLeft:'20px'}}>Certified Products</p>
          </div>
        </Col>

        {/* Third Flexbox */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center" style={flexBoxStyle}>

          <div className="d-flex justify-content-between">
            <p style={{fontSize:'60px', fontWeight:'600'}}>500k</p>
            <p style={{fontSize:'28px', fontWeight:'600',marginLeft:'20px'}}>Healthy Community</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThreeFlexboxesRow;
