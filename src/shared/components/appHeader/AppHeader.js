import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Menu } from 'react-feather';

import SVG from '../SVG';
import SvgData from '../../../assets/svg.json';
import { noop } from '../../../utils';

const AppLogoData = SvgData.find(data => data.key === 'logo');

const AppHeader = ({ setSidebarVisibility }) => (
  <div className="app-header">
    <Navbar expand="lg">
      <Navbar.Brand href="/" className="d-lg-none">
        <SVG
          fill="currentColor"
          className="loading-spin"
          style={{ transformOrigin: '256px 256px' }}
          path={AppLogoData.path}
        />
        <span>MZIKI TRAK</span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className="order-2 order-lg-1">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="md-12" />
        </Form>
      </Navbar.Collapse>
      <Nav className="order-1 order-lg-2">
        <Nav.Item className="d-lg-none" onClick={setSidebarVisibility}>
          <Nav.Link>
            <Menu />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </div>
);

AppHeader.propTypes = {
  setSidebarVisibility: PropTypes.func,
};

AppHeader.defaultProps = {
  setSidebarVisibility: noop,
};

export default AppHeader;
