import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sprouts from './sprouts.png';
import mfp from './millet-flour-packaging.png';
import granolas from './Granolas.png';

const TwoColumnContainer = () => {
   

  const flexStyle = {
    maxWidth: '100px',
    height: '100px',
    padding: '16px',
    borderRadius: '10px',
    background: '#F5F2ED',
    boxShadow: '6px 6px 12px 0px #0000001A',
    marginRight: '20px', // Space between flexboxes
    overflow: 'hidden', // Ensure the image doesn't exceed the flexbox boundaries
  };

  const imageStyle = {
    height: '100px', // Cover the entire height of the flexbox
    width: '100px', // Cover the entire width of the flexbox
    objectFit: 'cover', // Ensure the image covers the entire space without distortion
    borderRadius: '10px',
  };



  return (
    <Container fluid style={{marginBottom:'100px'}}>
      <h2 cclassName="ml-5" style={{ fontSize: '54px', fontWeight: '600',textAlign:'center' ,marginTop: '100px'  }}>Our Products</h2>
      <Row >
        {/* First Column */}
        <Col xs={12} md={7}>
       

          {/* Three Separate Subcontents */}
          <div className="mb-3 mt-5">
            <p style={{ width: '408px', marginLeft: '120px', marginTop: '20px', borderRadius: '30px', textAlign: 'center', padding: '8px 0px 8px 0px', backgroundColor: '#9A97DA', fontSize: '28px', fontWeight: '600', color: 'white' }}>Start with a Healthy Granola</p>
          </div>
          <div className="mb-3">
            <p style={{ width: '480px', marginLeft: '170px', marginTop: '20px', borderRadius: '30px', textAlign: 'center', padding: '8px 0px 8px 0px', backgroundColor: '#9A97DA', fontSize: '28px', fontWeight: '600', color: 'white' }}>Packed with Vitamins & Minerals</p>
          </div>
          <div className="mb-3 mt-4 " >
            <p style={{ width: '595px', marginLeft: '170px', marginTop: '20px', borderRadius: '10px', textAlign: 'left', padding: '30px 30px 30px 37px', backgroundColor: '#A5BE6A', fontSize: '18px', fontWeight: '600', color: 'white' }}>Lorem ipsum dolor sit amet consectetur. Consectetur ac feugiat egestas condimentum eleifend sit. Velit posuere quisque odio ultrices vitae. Est risus id ornare arcu etiam orci tempor mattis.</p>
          </div>

          {/* 5 Flexboxes in a Row */}
          <Row className="justify-content-start mt-5" style={{marginLeft:'170px'}}>
            {/* Flexbox 1 */}
            <Col className="d-flex align-items-center justify-content-center" style={flexStyle}>
              <img
                src={sprouts} // Replace with the actual path to your image
                alt="Image 1"
                style={imageStyle}
              />
            </Col>

            {/* Flexbox 2 */}
            <Col className="d-flex align-items-center justify-content-center" style={flexStyle}>
              <img
                src={mfp} // Replace with the actual path to your image
                alt="Image 2"
                style={imageStyle}
              />
            </Col>

            {/* Flexbox 3 */}
            <Col className="d-flex align-items-center justify-content-center" style={flexStyle}>
              <img
                src={sprouts} // Replace with the actual path to your image
                alt="Image 3"
                style={imageStyle}
              />
            </Col>

            {/* Flexbox 4 */}
            <Col className="d-flex align-items-center justify-content-center" style={flexStyle}>
              <img
                src={mfp}// Replace with the actual path to your image
                alt="Image 4"
                style={imageStyle}
              />
            </Col>

            {/* Flexbox 5 */}
            <Col className="d-flex align-items-center justify-content-center" style={flexStyle}>
              <img
                src={sprouts} 
                alt="Image 5"
                style={imageStyle}
              />
            </Col>
          </Row>
        </Col>

        {/* Second Column */}
        <Col xs={12} md={5} style={{}}>
          {/* Image */}
          <img
            src={granolas}
            alt="Placeholder Image"
            style={{width:'670px', height: '540px',marginTop:'0px',marginLeft:'-100px'}}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnContainer;
