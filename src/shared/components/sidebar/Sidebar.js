import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';

import SVG from '../SVG';
import SvgData from '../../../assets/svg.json';
import { noop } from '../../../utils';

const AppLogoData = SvgData.find(data => data.key === 'logo');

const Sidebar = ({
  menuItems, selectedMenuItemId, isSidebarFolded, toggleSidebarFolded, isSidebarVisible,
}) => (
  <div id="aside" className={`sidebar ${isSidebarFolded ? 'folded' : ''} ${isSidebarVisible ? 'visible' : ''}`}>
    <div className="brand-container">
      <Link to="/" className="navbar-brand ">
        <SVG
          fill="currentColor"
          className="loading-spin"
          style={{ transformOrigin: '256px 256px' }}
          path={AppLogoData.path}
        />
        <span>MZIKI TRAK</span>
      </Link>
    </div>
    <div className="nav-wrapper" data-nav>
      <ul className="nav">
        {
          menuItems.map(menuItem => (
            <li key={menuItem.id} className={menuItem.id === selectedMenuItemId ? 'active' : ''}>
              <Link to={menuItem.url}>
                <span className="nav-icon">
                  {menuItem.icon}
                </span>
                <span className="nav-text">{menuItem.title}</span>
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="nav-fold py-1">
        <span
          className="p-3"
          role="presentation"
          onClick={toggleSidebarFolded}
        >
          <Menu />
        </span>
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  menuItems: PropTypes.instanceOf(Array),
  selectedMenuItemId: PropTypes.number,
  isSidebarFolded: PropTypes.bool,
  toggleSidebarFolded: PropTypes.func,
  isSidebarVisible: PropTypes.bool,
};

Sidebar.defaultProps = {
  menuItems: [],
  selectedMenuItemId: 0,
  isSidebarFolded: false,
  toggleSidebarFolded: noop,
  isSidebarVisible: false,
};

export default Sidebar;
