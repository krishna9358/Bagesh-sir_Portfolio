import React, { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (label) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <div className="hamburger-container">
      <nav className="main" id="hamburger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                {l.sublinks ? (
                  <>
                    <div onClick={() => toggleSubmenu(l.label)} className="submenu-toggle">
                      <h3 className={l.index ? 'index-li' : ''}>{l.label}</h3>
                    </div>
                    {submenuOpen[l.label] && (
                      <ul className="submenu">
                        {l.sublinks.map((sublink) => (
                          <li key={sublink.label}>
                            <Link to={sublink.path} onClick={() => setOpen(!open)}>
                              <h3>{sublink.label}</h3>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={l.path} onClick={() => setOpen(!open)}>
                    <h3 className={l.index ? 'index-li' : ''}>{l.label}</h3>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
