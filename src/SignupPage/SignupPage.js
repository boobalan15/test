import React from 'react';
import './SignupPagestyle.css';
import './SignupPagestyleguide.css';
import './SignupPage.js';
import image_1 from '../images_signup/image_1.png';
import image_2 from '../images_signup/image_2.png';
import image_3 from '../images_signup/image_3.png';
import image_4 from '../images_signup/image_4.png';
import image_5 from '../images_signup/image_5.png';
import line_1 from '../images_signup/line_1.png';
import line_2 from '../images_signup/line_2.png';
import vector_1 from '../images_signup/vector_1.png';
import vector_2 from '../images_signup/vector_2.png';
import logo_1 from '../images_signup/logo_1.png';
import logo_2 from '../images_signup/logo_2.png';
import logo_3 from '../images_signup/logo_3.png';
import line_3 from '../images_signup/line_3.png';



const SignupPage = () => {
  return (
    <div className="sign-up-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="frame">
            <div className="frame-wrapper">
              <div className="div">
                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="div">
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
              </div>
            </div>
            <div className="frame-2">
              <div className="div">
                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
                <div className="ellipse"></div>
                <div className="rectangle"></div>
              </div>
            </div>
          </div>
          <div className="rectangle-2"></div>
          <img className="granolas" src={image_1} alt="granolas" />
          <img
            className="millet-flour"
            src={image_5}
            alt="millet-flour"
          />

          <img className="image" src={image_3} alt="image" />
          <img className="img" src={image_4} alt="img" />
          <form action="/action_page.php" method="get"></form>
          <div className="rectangle-3"></div>
          <div className="text-wrapper">Login</div>
          <div className="text-wrapper-2">Sign up</div>
          <div className="rectangle-4"></div>
          <img className="line" src={line_1} alt="line" />
          <img className="line-2" src={line_2} alt="line-2" />
          <div className="text-wrapper-3">
          <input type="email" id="Email" name="Email" placeholder="Email"/>
            </div>
          <div className="already-have-an">Already&nbsp;&nbsp;have an account ?</div>
          <div className="text-wrapper-4">Reset password ?</div>
          <div className="text-wrapper-5">Or continue with</div>
          <img className="image-2" src={image_2} alt="image-2" />
          <img id="google" src={logo_1} />
          <img id="facebook" src={logo_2} />
          <img id="apple" src={logo_3} />

          <div className="text-wrapper-6">
          <input type="password" id="password" name="password" placeholder="Password"/>
          </div>
          <img className="line-3" src="img/line-7.svg" alt="line-3" />
          <img className="line-4" src="img/line-8.svg" alt="line-4" />
          <img className="vector" src={vector_1} alt="vector" />
          <img className="vector-2" src={vector_2} alt="vector-2" />
          <div className="rectangle-5"></div>
          <div className="text-wrapper-7">Sign up</div>
          <div className="text-wrapper-8">logo</div>
          <img className="line-5" src={line_3} alt="line-5" />
          <img className="line-6" src={line_3} alt="line-6" />
         
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
