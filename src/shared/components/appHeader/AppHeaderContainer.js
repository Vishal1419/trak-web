import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppHeader from './AppHeader';
import { actions } from '../../../modules/app';
import { noop } from '../../../utils';

const AppHeaderContainer = ({
  setSidebarVisibility, toggleSearchbarVisibility, isSearchbarVisible, toggleFullScreen,
}) => {
  const _setSidebarVisibility = () => {
    setSidebarVisibility(true);
  };

  const _toggleFullScreen = () => {
    toggleFullScreen(true);
  };

  return (
    <AppHeader
      setSidebarVisibility={_setSidebarVisibility}
      toggleSearchbarVisibility={toggleSearchbarVisibility}
      isSearchbarVisible={isSearchbarVisible}
      toggleFullScreen={_toggleFullScreen}
    />
  );
};

AppHeaderContainer.propTypes = {
  setSidebarVisibility: PropTypes.func,
  toggleSearchbarVisibility: PropTypes.func,
  isSearchbarVisible: PropTypes.bool,
  toggleFullScreen: PropTypes.func,
};

AppHeaderContainer.defaultProps = {
  setSidebarVisibility: noop,
  toggleSearchbarVisibility: noop,
  isSearchbarVisible: false,
  toggleFullScreen: noop,
};

const mapStateToProps = state => ({
  isSearchbarVisible: state.app.isSearchbarVisible,
});

const mapDispatchToProps = dispatch => ({
  setSidebarVisibility: visibilityFlag => dispatch(actions.setSidebarVisibility(visibilityFlag)),
  toggleSearchbarVisibility: visibilityFlag => dispatch(
    actions.toggleSearchbarVisibility(visibilityFlag),
  ),
  toggleFullScreen: isFullScreen => dispatch(actions.toggleFullScreen(isFullScreen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer);
