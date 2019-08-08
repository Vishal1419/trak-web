import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SVG from '../SVG';
import SvgData from '../../../assets/svg.json';

const AppLogoData = SvgData.find(data => data.key === 'logo');

const Sidebar = ({ menuItems, selectedMenuItemId }) => (
  <div id="aside" className="page-sidenav no-shrink bg-light nav-dropdown fade">
    <div className="sidenav h-100 bg-light modal-dialog">
      <div className="navbar">
        <Link to="/" className="navbar-brand ">
          <SVG
            fill="currentColor"
            className="loading-spin"
            style={{ transformOrigin: '256px 256px' }}
            path={AppLogoData.path}
          />
          <span className="hidden-folded d-inline l-s-n-1x ">MZIKI TRAK</span>
        </Link>
      </div>
      <div className="flex scrollable hover">
        <div className="nav-active-text-primary" data-nav>
          <ul className="nav bg">
            {
              menuItems.map(menuItem => (
                <li className={menuItem.id === selectedMenuItemId ? 'active' : ''}>
                  <Link to={menuItem.url}>
                    <span className="nav-icon">
                      <i data-feather={menuItem.icon} />
                    </span>
                    <span className="nav-text">{menuItem.title}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="nav-fold py-1">
        <a data-toggle-class="folded" data-target="#aside" className="p-3"> {/* eslint-disable-line */}
          <i data-feather="menu" />
        </a>
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  menuItems: PropTypes.instanceOf(Array),
  selectedMenuItemId: PropTypes.number,
};

Sidebar.defaultProps = {
  menuItems: [],
  selectedMenuItemId: 0,
};

export default Sidebar;
