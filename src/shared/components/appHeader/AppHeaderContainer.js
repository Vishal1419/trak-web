import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppHeader from './AppHeader';
import { actions } from '../../../modules/app';
import { noop } from '../../../utils';

const AppHeaderContainer = ({ setSidebarVisibility }) => {
  const _setSidebarVisibility = () => {
    setSidebarVisibility(true);
  };

  return (
    <AppHeader setSidebarVisibility={_setSidebarVisibility} />
  );
};

AppHeaderContainer.propTypes = {
  setSidebarVisibility: PropTypes.func,
};

AppHeaderContainer.defaultProps = {
  setSidebarVisibility: noop,
};

const mapDispatchToProps = dispatch => ({
  setSidebarVisibility: visibilityFlag => dispatch(actions.setSidebarVisibility(visibilityFlag)),
});

export default connect(null, mapDispatchToProps)(AppHeaderContainer);
