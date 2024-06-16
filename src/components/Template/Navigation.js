import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import Hamburger from './Hamburger';
import '../../static/css/components/navigation.scss'

const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label} className={l.sublinks ? 'has-submenu' : ''}>
            <Link to={l.path}>{l.label}</Link>
            {l.sublinks && (
              <ul className="submenu">
                {l.sublinks.map((sublink) => (
                  <li key={sublink.label}>
                    <Link to={sublink.path}>{sublink.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
