
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import icon1 from './Icon.png';
import icon2 from './Icon2.png';
import icon3 from './Icon3.png';
import icon4 from './Icon4.png';
import icon5 from './Icon5.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#A5BE6A', padding: '30px 0', color: 'black', position: 'relative', bottom: 0, width: '100%' }}>
            <Container fluid>
                {/* Title */}
                <h3 className="text-center mb-4" style={{ color: 'white', fontSize: '34px', marginTop: '30px' }}>Nayah Food</h3>

                <Row className="text-center mb-4 " style={{ marginLeft: '400px', marginTop: '40px', fontSize: '24px', fontWeight: '600', color: 'white' }}>
                    {/* 5 Text Contents in a Row */}
                    <Col xs={12} md={1} className="mb-3 me-5">
                        <p>Service</p>
                    </Col>
                    <Col xs={12} md={1} className="mb-3  me-5">
                        <p>Product</p>
                    </Col>
                    <Col xs={12} md={1} className="mb-3  me-5">
                        <p>Company</p>
                    </Col>
                    <Col xs={12} md={1} className="mb-3  me-5">
                        <p>Legal</p>
                    </Col>
                    <Col xs={12} md={1} className="mb-3 ">
                        <p>Contact</p>
                    </Col>
                </Row>

                <Row className="text-center mb-4" style={{ marginLeft: '550px', marginTop: '-20px' }}>
                    {/* 5 Images in a Row */}
                    <Col xs={12} md={1} className="mb-3">
                        <Image src={icon4} alt="Shield" fluid />
                    </Col>
                    <Col xs={12} md={1} className="mb-3">
                        <Image src={icon1} alt="Envelope" fluid />
                    </Col>
                    <Col xs={12} md={1} className="mb-3">
                        <Image src={icon5} alt="Clock" fluid />
                    </Col>
                    <Col xs={12} md={1} className="mb-3">
                        <Image src={icon3} alt="Calendar" fluid />
                    </Col>
                    <Col xs={12} md={1} className="mb-3">
                        <Image src={icon2} alt="Comment" fluid />
                    </Col>
                </Row>



                <Row className="text-center" style={{fontSize:'20px',fontWeight:'500',color:'white',marginBottom:'-10px'}}>
                    {/* 3 Text Contents in a Row */}
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
            </Container>
        </div >

    );
};

export default Footer;
