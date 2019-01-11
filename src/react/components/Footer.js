import React, { Component } from "react";
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'

class Footer extends Component {
  render() {
    return (
      <footer className="footer-bs">
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft">
            <img src={logo} className="footer-image" alt=""/>
            <p>
              Learn to speak english with our ai instructor. Practice exercises
              for kids and adults.
            </p>
            <p>© 2018 Zain.com, All rights reserved</p>
          </div>
          <div className="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu —</h4>
            <div className="col-md-6">
              <ul className="pages">
                <li>
                  <Link to="/speech">Speech</Link>
                </li>
                <li>
                  <Link to="/level1">Level 1</Link>
                </li>
                <li>
                  <Link to="/level2">Level 2</Link>
                </li>
                <li>
                  <Link to="/level3">Level 3</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/">Contacts</Link>
                </li>
                <li>
                  <Link to="/">Terms & Condition</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
              <li>
                <Link to="/">RSS</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>Robots are cool. Learning english is cool. Learning english from robots is the coolest</p>
            <div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Join our newsletter..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-envelope" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
