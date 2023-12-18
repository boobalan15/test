import React from 'react';
import './LoginPagestyleguide.css';
import './LoginPagestyle.css';
import flour_1 from '../images/flour_1.png'
import flour_2 from '../images/flour_2.png'
import flour_3 from '../images/flour_3.png'
import flour_4 from '../images/flour_4.png'
import line_1 from '../images/line_1.png'
import line_2 from '../images/line_2.png'
import vector_1 from '../images/vector_1.png'
import vector_2 from '../images/vector_2.png'
import wheat_1 from '../images/wheat_1.png'
import add_on_1 from '../images/add_on_1.png'
import add_on_2 from '../images/add_on_2.png'
import { Link } from 'react-router-dom';
import { SignupPage } from '../SignupPage/SignupPage.js';

const YourComponent = () => {
  return (
    <div className="login-page">
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
          <img
            className="flour_4"
            src={flour_4}
            alt="flour_4"
          />
          <img className="flour_1" src={flour_1} alt="flour_1" />
          <img className="flour_2" src={flour_2} alt="flour_2" />
          <img className="add_on_1" src={add_on_1} alt="add_on_1" />
          <img className="flour_3" src={flour_3} alt="flour_3" />
          <img className="add_on_2" src={add_on_2} alt="add_on_2" />
          <img
            className="wheat_1"
            src={wheat_1}
            alt="wheat_1"
          />
          <form action="/action_page.php" method="get"></form>
          <div className="rectangle-3"></div>
          <div className="text-wrapper"><a href="../SignupPage/SignupPage.js">Signup</a></div>
          <div className="text-wrapper-2">Login</div>
          <div className="rectangle-4"></div>
          <img className="line_1" src={line_1} alt="line_1" />
          <img className="line_2" src={line_2} alt="line_2" />
          <div className="text-wrapper-3">
          <input type="email" id="Email" name="Email" placeholder="Email"/>
            </div>
          <div className="text-wrapper-4">
            <input type="checkbox" id="check" name="check" />
            Remember me
            </div>
          <p className="p">Don’t have an account?</p>
          <div className="text-wrapper-5">Forget password?</div>
          <div className="text-wrapper-6">
          <input type="password" id="password" name="password" placeholder="Password"/>
            </div>
          <img className="vector_1" src={vector_1} alt="vector_1" />
          <img className="vector_2" src={vector_2} alt="vector_2" />
          <div className="rectangle-6"></div>
          <div className="text-wrapper-7">Login</div>
          <div className="text-wrapper-8">logo</div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
