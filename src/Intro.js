import React from 'react';
import { Col } from 'react-bootstrap';
import './products.css';

const Intro = () => {
  return (
    <div className="header-container">
      <Col xs={12} md={6} className="d-flex flex-column justify-content-start">
        <h2 style={{ fontSize: '54px', fontWeight: 600, maxWidth: '585px', marginTop: '160px', marginLeft: '60px' }}>
          Order your daily Supplements
        </h2>

        <p style={{ maxWidth: '525px', fontFamily: '', fontWeight: 400, fontSize: '18px', marginLeft: '60px' }}>
          Lorem ipsum dolor sit amet consectetur. Enim nisl sed vestibulum volutpat interdum quam
          adipiscing sit. Amet nibh faucibus feugiat viverra.
        </p>

        <div className="d-flex justify-content-start mt-3 text-left" style={{ marginLeft: '60px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{
              width: '491px',
              height: '38px',
              padding: '8px 32px',
              borderRadius: '40px',
              background: '#F5F2ED',
              position: 'relative',
            }}>
              <input
                type="text"
                placeholder="Search..."
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '18px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  lineHeight: '22px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
              />

              {/* Oval with background */}
              <div style={{
                width: '124px',
                height: '38px',
                padding: '8px 32px',
                borderRadius: '40px',
                background: '#9A97DA',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: 0,
              }}>
                <span
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    lineHeight: '22px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                  }}
                >
                  Search
                </span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Intro;
