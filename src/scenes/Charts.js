import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MainTemplate from '../shared/templates/MainTemplate/MainTemplateContainer';
import { ChartsContainer } from '../modules/charts';
import menuItems from '../data/menuItems.json';
import { actions } from '../modules/app';
import { noop, recursiveFindMenuItemIdByPath } from '../utils';

const Charts = ({ location, setSelectedMenuItemId }) => {
  useEffect(() => {
    const selectedMenuItemId = recursiveFindMenuItemIdByPath(menuItems, location.pathname);
    setSelectedMenuItemId(selectedMenuItemId);
  }, []);

  return (
    <MainTemplate>
      <ChartsContainer />
    </MainTemplate>
  );
};

Charts.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  setSelectedMenuItemId: PropTypes.func,
};

Charts.defaultProps = {
  setSelectedMenuItemId: noop,
};

const mapDispatchToProps = dispatch => ({
  setSelectedMenuItemId: menuItemId => dispatch(actions.setSelectedMenuItemId(menuItemId)),
});

export default connect(null, mapDispatchToProps)(withRouter(Charts));
