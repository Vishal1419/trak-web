import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import menuItems from '../../../data/menuItems';
import { actions } from '../../../modules/app';
import { noop } from '../../../utils';

const SidebarContainer = ({
  selectedMenuItemId, isSidebarFolded, toggleSidebarFolded, isSidebarVisible,
}) => (
  <Sidebar
    menuItems={menuItems}
    selectedMenuItemId={selectedMenuItemId}
    isSidebarFolded={isSidebarFolded}
    isSidebarVisible={isSidebarVisible}
    toggleSidebarFolded={toggleSidebarFolded}
  />
);

SidebarContainer.propTypes = {
  selectedMenuItemId: PropTypes.number,
  isSidebarFolded: PropTypes.bool,
  toggleSidebarFolded: PropTypes.func,
  isSidebarVisible: PropTypes.bool,
};

SidebarContainer.defaultProps = {
  selectedMenuItemId: 0,
  isSidebarFolded: false,
  toggleSidebarFolded: noop,
  isSidebarVisible: false,
};

const mapStateToProps = state => ({
  selectedMenuItemId: state.app.selectedMenuItemId,
  isSidebarFolded: state.app.isSidebarFolded,
  isSidebarVisible: state.app.isSidebarVisible,
});

const mapDispatchToProps = dispatch => ({
  toggleSidebarFolded: () => dispatch(actions.toggleSidebarFolded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
