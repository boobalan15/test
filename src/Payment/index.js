import React from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import mfprb from '../mfprb.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import cod from './cod.png'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

export const Payment = () => {
    return (
        <Container fluid style={{ backgroundColor: '#F3DBB9' }}>
            <Row>
                {/* First Column */}
                <Col className="d-flex flex-column" style={{ width: '795px', height: '450px', marginTop: '40px', marginBottom: '30px', marginLeft: '180px', borderRadius: '20px', boxShadow: '0px 4px 4px 0px #00000040', padding: '0px 50px 0px 20px', opacity: '0.87', backgroundColor: '#EEE2CF' }}>
                    <h2 style={{ fontSize: '15px', fontWeight: '800', paddingTop: '30px', paddingLeft: '30px' }}>ORDER SUMMARY </h2>
                    <Row className="mb-0">
                        <Col xs={12} md={6} style={{ fontSize: '15px', fontWeight: '500', paddingTop: '30px', paddingLeft: '85px' }}>
                            <p>ITEM</p>
                        </Col>
                        <Col xs={12} md={3} style={{ fontSize: '15px', fontWeight: '500', paddingTop: '30px', paddingLeft: '57px' }}>
                            <p>QTY</p>
                        </Col>
                        <Col xs={12} md={3} style={{ fontSize: '15px', fontWeight: '500', paddingTop: '30px', paddingLeft: '65px' }}>
                            <p>PRICE</p>
                        </Col>
                    </Row>

                    {/* Order Item Flexbox */}
                    <div className="d-flex flex-column" style={{ border: 'none', marginLeft: '30px', opacity: 'none' }}>
                        {/* Order Item 1 */}
                        <div className="d-flex align-items-center justify-content-between mb-1" style={{ width: '550px', backgroundColor: 'white', borderRadius: '10px', padding: '20px 30px 20px 30px' }}>
                            <div style={{ height: '70px', width: '65px', backgroundColor: '#DFDFDF', alignItems: 'center', boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <Image className=' align-items-center' src={mfprb} alt="Product" width="120" height="90" style={{ objectFit: 'cover', paddingRight: '53px', paddingTop: '0px' }} />
                            </div>
                            <p style={{ marginLeft: '', textAlign: 'left', width: '100px', paddingTop: '10px' }}>green banana Powder</p>
                            <div className="d-flex align-items-center me-5">
                                <button style={{ borderRadius: '50%', width: '24px', height: '24px', fontSize: '12px', fontWeight: 'bold', border: 'none', paddingBottom: '5px', paddingTop: '2px', marginRight: '5px', boxShadow: ' 2px 2px 4px 0px #00000033' }}>-</button>
                                <p style={{ borderRadius: '40px', width: '44px', height: '24px', background: '#EEE2CF', fontSize: '12px', fontWeight: 'bold', padding: '4px 17px', margin: '0', boxShadow: '2px 2px 4px 0px #00000033' }}>1</p>
                                <button style={{ borderRadius: '50%', width: '24px', height: '24px', fontSize: '12px', fontWeight: 'bold', border: 'none', paddingBottom: '5px', marginLeft: '5px', paddingTop: '3px', boxShadow: '2px 2px 4px 0px #00000033' }}>+</button>
                            </div>

                            <p className='pt-3'>$20.00</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-1" style={{ width: '550px', backgroundColor: 'white', borderRadius: '10px', padding: '20px 30px 20px 30px' }}>
                            <div style={{ height: '70px', width: '65px', backgroundColor: '#DFDFDF', alignItems: 'center', boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <Image className=' align-items-center' src={mfprb} alt="Product" width="120" height="90" style={{ objectFit: 'cover', paddingRight: '53px', paddingTop: '0px' }} />
                            </div>
                            <p style={{ marginLeft: '', textAlign: 'left', width: '100px', paddingTop: '10px' }}>green banana Powder</p>
                            <div className="d-flex align-items-center me-5">
                                <button style={{ borderRadius: '50%', width: '24px', height: '24px', fontSize: '12px', fontWeight: 'bold', border: 'none', paddingBottom: '5px', marginRight: '5px', paddingTop: '2px', boxShadow: ' 2px 2px 4px 0px #00000033' }}>-</button>
                                <p style={{ borderRadius: '40px', width: '44px', height: '24px', background: '#EEE2CF', fontSize: '12px', fontWeight: 'bold', padding: '4px 17px', margin: '0', boxShadow: '2px 2px 4px 0px #00000033' }}>1</p>
                                <button style={{ borderRadius: '50%', width: '24px', height: '24px', fontSize: '12px', fontWeight: 'bold', border: 'none', paddingBottom: '5px', marginLeft: '5px', paddingTop: '3px', boxShadow: '2px 2px 4px 0px #00000033' }}>+</button>
                            </div>

                            <p className='pt-3'>$20.00</p>
                        </div>

                        <div className="d-flex align-items-center justify-content-end me-2 mt-0">
                            <p style={{ marginLeft: '10px', fontSize: '30px', fontWeight: '600' }}>Total:</p>
                            <p style={{ marginLeft: '10px', fontSize: '24px', fontWeight: '600', paddingTop: '5px' }}>₹40.00</p>
                        </div>



                        {/* Repeat the above structure for each order item */}
                    </div>
                </Col>

                {/* Second Column */}
                <Col className="d-flex flex-column secCol" style={{

                    marginBottom: '30px',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    backgroundColor: '#EEE2CF',
                    marginLeft: '20px',
                    marginRight: '180px',
                    borderRadius: '20px',
                    padding: '30px 5px 30px 30px ',
                    marginTop: '40px'
                }}>
                    {/* Title and Subtitle Content */}
                    <h2 style={{
                        fontSize: '15px',
                        fontWeight: '800',

                    }}>PAYMENT MODE</h2>
                    <p style={{
                        fontWeight: '600',
                        fontSize: '20px',
                        textAlign: 'center',
                        paddingTop: '10px'
                    }}>CASH ON DELIVERY</p>

                    {/* Image */}
                    <Image style={{ marginLeft: '20px', marginTop: '-35px', marginBottom: '-20px' }} src={cod} alt="Product" width="360" height="200" />

                    {/* Text Content */}
                    <p style={{
                        fontWeight: '500',
                        fontSize: '15px',
                    }}>Gift Card / Promo code</p>

                    {/* Promo Code Input and Apply Button in a Row */}
                    <Row className="mb-2 ms-1" >
                        <Col>
                            <Form.Control type="text" placeholder="Enter Promo Code" style={{ border: '1px solid #4A5568', width: '250px', height: '45px', borderRadius: '10px', boxShadow: '0px 4px 4px 0px #00000040' }} />
                        </Col>
                        <Col>
                            <Button style={{ width: '130px', height: '45px', border: 'none', backgroundColor: ' #4A5568', boxShadow: ' 0px 4px 4px 0px #00000040', borderRadius: '10px' }} >Apply</Button>
                        </Col>
                    </Row>

                    {/* Four Pairs of Two Text Content in a Row */}
                    <Row className=" ms-3 custom-row ">
                        <Col className="d-flex flex-row" >
                            <p style={{
                                fontWeight: '500',
                                fontSize: '15px',
                            }}>Sub Total</p>
                            <p className='ms-auto me-5' style={{
                                fontWeight: '500',
                                fontSize: '15px',
                            }}>370.00</p>
                        </Col>
                    </Row>
                    <Row className=" ms-3 custom-row">
                        <Col className="d-flex flex-row">
                            <p style={{
                                fontWeight: '500',
                                fontSize: '15px',
                            }}>Tax</p>
                            <p style={{
                                fontWeight: '500',
                                fontSize: '15px',
                            }} className='ms-auto me-5'>35.00</p>
                        </Col>
                    </Row>
                    <Row className=" ms-3 custom-row">
                        <Col className="d-flex flex-row">
                            <p style={{
                                fontWeight: '500',
                                fontSize: '15px',
                            }}>Shipping</p>
                            <p style={{
                                fontWeight: '500',
                                fontSize: '15px',
                                color: '#A5BE6A'
                            }} className='ms-auto me-5'>Free</p>
                        </Col>
                    </Row>
                    <Row className="ms-3 custom-row mb-1">
                        <Col className="d-flex flex-row">
                            <p style={{
                                fontWeight: '500',
                                fontSize: '15px',
                            }}>Total</p>
                            <p style={{
                                fontWeight: '500',
                                fontSize: '15px',
                            }} className='ms-auto me-5'><span>₹ </span>405.00</p>
                        </Col>
                    </Row>


                    {/* Single Text Content */}
                    <p style={{
                        fontWeight: '700',
                        fontSize: '15px',
                        marginBottom: '.1rem'
                    }}>BILLING INFO</p>

                    {/* Radio Button and Text Content in a Row */}
                    <Row className="mb-3">
                        <Col>
                            <Form.Check type="radio" label="Billing adress same as shipping" style={{
                                fontWeight: '500',
                                fontSize: '15px',
                            }} />
                        </Col>

                    </Row>

                    {/* Confirm Order Button */}
                    <Button style={{
                        width: '350px',
                        marginLeft: '43px',
                        height: '45px',
                        backgroundColor: ' #4A5568',
                        border: 'none',
                        boxShadow: '0px 4px 4px 0px #00000040'

                    }}>Confirm Order</Button>
                </Col>
            </Row>
        </Container >
    );
};


export default Payment;


