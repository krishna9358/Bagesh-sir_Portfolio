import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Bagesh Kumar via email @ bageshk742@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <div
          className="row"
          style={
            {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0px',
            }
          }
          data-aos="fade-in"
        >
          <div className="col-lg-6 d-flex" style={{ left: '0px' }}>
            <div className="info">
              <div className="address">
                <h4>Location:</h4>
                <p>Manipal University, Jaipur</p>
                <br />
              </div>
              <div className="email">
                <h4>Email:</h4>
                <p>bageshk742@gmail.com</p>
                <br />
              </div>
              <div className="phone">
                <h4>Call:</h4>
                <p>+91-9431645778</p>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
            <div style={{ width: '100%' }}>
              <iframe title="location" src="https://maps.google.com/maps?hl=en&q=Manipal%20University,%20Jaipur+(Bagesh%20Kumar)&t=&z=17&ie=UTF8&iwloc=B&output=embed" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />
            </div>
          </div>

        </div>
      </div>
      <center><ContactIcons /></center>
    </article>
  </Main>
);

export default Contact;
