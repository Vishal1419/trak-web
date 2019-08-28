import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../components/appHeader/AppHeaderContainer';
import AppFooter from '../../components/appFooter/AppFooterContainer';
import Sidebar from '../../components/sidebar/SidebarContainer';
import { noop } from '../../../utils';

const MainTemplate = ({ children, isSidebarVisible, setSidebarVisibility }) => (
  <div className="main-template">
    <Sidebar />
    <div className="template-body">
      <AppHeader />
      <main className="page-container">
        {children}
      </main>
      <AppFooter />
    </div>
    {
      isSidebarVisible
      && (
        <div
          className="modal-backdrop fade show"
          role="presentation"
          onClick={setSidebarVisibility}
        />
      )
    }
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  isSidebarVisible: PropTypes.bool,
  setSidebarVisibility: PropTypes.func,
};

MainTemplate.defaultProps = {
  children: <div />,
  isSidebarVisible: false,
  setSidebarVisibility: noop,
};

export default MainTemplate;
