import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import menuItems from '../../../data/menuItems.json';

const SidebarContainer = ({ selectedMenuItemId }) => (
  <Sidebar
    menuItems={menuItems}
    selectedMenuItemId={selectedMenuItemId}
  />
);

SidebarContainer.propTypes = {
  selectedMenuItemId: PropTypes.number,
};

SidebarContainer.defaultProps = {
  selectedMenuItemId: 0,
};

const mapStateToProps = state => ({
  selectedMenuItemId: state.app.selectedMenuItemId,
});

export default connect(mapStateToProps)(SidebarContainer);
