import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainTemplate from './MainTemplate';
import { actions } from '../../../modules/app';
import { noop } from '../../../utils';

const MainTemplateContainer = ({
  children, isSidebarFolded, isSidebarVisible, setSidebarVisibility,
}) => {
  const _setSidebarVisibility = () => {
    setSidebarVisibility(false);
  };

  return (
    <MainTemplate
      isSidebarFolded={isSidebarFolded}
      isSidebarVisible={isSidebarVisible}
      setSidebarVisibility={_setSidebarVisibility}
    >
      {children}
    </MainTemplate>
  );
};

MainTemplateContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  isSidebarFolded: PropTypes.bool,
  isSidebarVisible: PropTypes.bool,
  setSidebarVisibility: PropTypes.func,
};

MainTemplateContainer.defaultProps = {
  children: <div />,
  isSidebarFolded: false,
  isSidebarVisible: false,
  setSidebarVisibility: noop,
};

const mapStateToProps = state => ({
  isSidebarFolded: state.app.isSidebarFolded,
  isSidebarVisible: state.app.isSidebarVisible,
});

const mapDispatchToProps = dispatch => ({
  setSidebarVisibility: visibilityFlag => dispatch(actions.setSidebarVisibility(visibilityFlag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplateContainer);
