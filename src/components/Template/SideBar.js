import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogleScholar, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/bgk.png`} alt="" />
      </Link>
      <header>
        <h2>Bagesh Kumar</h2>
        <p>B.Tech, M.Tech, Ph.D</p>
      </header>
    </section>
    <section className="blurb">
      <p>
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '8px' }} />
        <a href="mailto:bageshk742@gmail.com">bageshk742@gmail.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faGoogleScholar} style={{ marginRight: '8px' }} />
        <a href="https://scholar.google.com/citations?user=f1lQ-BcAAAAJ&hl=en&oi=ao">Google Scholar </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
        <a href="https://www.linkedin.com/in/bagesh-kumar-388008105/">LinkedIn </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
        <a href="tel:9431645778">+91-9431645778 </a>
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
