import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import mfprb from './mfprb.png';

const Benefits = () => {
    return (
        <Container fluid style={{ backgroundColor: '#9A97DA', maxHeight: '80vh',marginBottom:'140px'}}>
            <Row className="align-items-start">
                {/* Image Column */}
                <Col xs={12} md={6} className="d-flex align-items-center" >
                    <Image src={mfprb} className="mr-3" width="721px" height="721px" style={{ marginTop: '10px', marginLeft: '144px' }} />
                </Col>
                {/* Content Column */}
                <Col xs={12} md={6} className="d-flex flex-column justify-content-start" >
                    <h2 style={{ fontSize: '40px', fontWeight: 600, color: 'white', maxWidth: '400px', marginTop: '140px', marginLeft: '60px' }}>
                        Clean ingredients with extraordinary benefits
                    </h2>

                    <p style={{ maxWidth: '525px', fontFamily: '', color: 'white', fontWeight: 400, fontSize: '18px', marginLeft: '60px' }}>
                        Lorem ipsum dolor sit amet consectetur. Enim nisl sed vestibulum volutpat interdum quam
                        adipiscing sit. Amet nibh faucibus feugiat viverra.
                    </p>

                    {/* Buttons row */}
                    <div className="d-flex justify-content-start mt-3 text-left" style={{ marginLeft: '60px' }}>
                        <Button
                            variant="primary"
                            className="me-4"
                            style={{
                                width: '170px',
                                fontSize: '20px',
                                backgroundColor: 'black',
                                color: 'white',
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
                                border: 'none',
                                fontSize: '20px',
                                borderRadius: '8px',
                                background: 'white',
                                color: 'black',
                                fontWeight: '600',
                            }}>
                            Learn More
                        </Button>
                    </div>
                </Col>



            </Row>
        </Container>
    );

}
export default Benefits;