import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Sidebar from '../../components/sidebar/SidebarContainer';

const MainTemplate = ({ children }) => (
  <div className="main-template">
    <AppHeader />
    <div className="template-body">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
    <AppFooter />
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

MainTemplate.defaultProps = {
  children: <div />,
};

export default MainTemplate;
