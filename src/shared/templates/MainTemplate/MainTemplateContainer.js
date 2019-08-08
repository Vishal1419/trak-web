import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainTemplate from './MainTemplate';
import { actions } from '../../../modules/app';
import { noop } from '../../../utils';

const MainTemplateContainer = ({ children, isSidebarVisible, setSidebarVisibility }) => {
  const _setSidebarVisibility = () => {
    setSidebarVisibility(false);
  };

  return (
    <MainTemplate isSidebarVisible={isSidebarVisible} setSidebarVisibility={_setSidebarVisibility}>
      {children}
    </MainTemplate>
  );
};

MainTemplateContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  isSidebarVisible: PropTypes.bool,
  setSidebarVisibility: PropTypes.func,
};

MainTemplateContainer.defaultProps = {
  children: <div />,
  isSidebarVisible: false,
  setSidebarVisibility: noop,
};

const mapStateToProps = state => ({
  isSidebarVisible: state.app.isSidebarVisible,
});

const mapDispatchToProps = dispatch => ({
  setSidebarVisibility: visibilityFlag => dispatch(actions.setSidebarVisibility(visibilityFlag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplateContainer);
