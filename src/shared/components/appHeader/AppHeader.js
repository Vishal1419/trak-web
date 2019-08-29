import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Menu, Search, Maximize } from 'react-feather';

import SVG from '../SVG';
import SvgData from '../../../assets/svg.json';
import { noop } from '../../../utils';

const AppLogoData = SvgData.find(data => data.key === 'logo');

const AppHeader = ({
  setSidebarVisibility, toggleSearchbarVisibility, isSearchbarVisible, toggleFullScreen,
}) => (
  <div className="app-header">
    <Navbar className="header">
      <Link to="/" className="d-lg-none navbar-brand">
        <SVG
          fill="currentColor"
          className="loading-spin"
          style={{ height: 32, width: 32, transformOrigin: '256px 256px' }}
          path={AppLogoData.path}
        />
        <span>MZIKI TRAK</span>
      </Link>
      <Search className="d-none d-lg-block svg" />
      <Form inline className="d-none d-lg-block">
        <FormControl type="text" placeholder="Search" className="md-12 search-input" />
      </Form>
      <Nav className="options">
        <Nav.Item onClick={toggleFullScreen}>
          <Nav.Link>
            <Maximize className="svg" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-lg-none" onClick={toggleSearchbarVisibility}>
          <Nav.Link>
            <Search className="svg" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-lg-none" onClick={setSidebarVisibility}>
          <Nav.Link>
            <Menu className="svg" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    {
      <Navbar className={`d-lg-none searchbar ${isSearchbarVisible ? 'searchbar-visible' : ''}`}>
        <Search className="svg" />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="md-12 search-input" />
        </Form>
      </Navbar>
    }
  </div>
);

AppHeader.propTypes = {
  setSidebarVisibility: PropTypes.func,
  toggleSearchbarVisibility: PropTypes.func,
  isSearchbarVisible: PropTypes.bool,
  toggleFullScreen: PropTypes.func,
};

AppHeader.defaultProps = {
  setSidebarVisibility: noop,
  toggleSearchbarVisibility: noop,
  isSearchbarVisible: false,
  toggleFullScreen: noop,
};

export default AppHeader;
