import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MainTemplate from '../shared/templates/MainTemplate/MainTemplateContainer';
import { DiscoverContainer } from '../modules/discover';
import menuItems from '../data/menuItems.json';
import { actions } from '../modules/app';
import { noop, recursiveFindMenuItemIdByPath } from '../utils';

const Discover = ({ location, setSelectedMenuItemId }) => {
  useEffect(() => {
    const selectedMenuItemId = recursiveFindMenuItemIdByPath(menuItems, location.pathname);
    setSelectedMenuItemId(selectedMenuItemId);
  }, []);

  return (
    <MainTemplate>
      <DiscoverContainer />
    </MainTemplate>
  );
};

Discover.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  setSelectedMenuItemId: PropTypes.func,
};

Discover.defaultProps = {
  setSelectedMenuItemId: noop,
};

const mapDispatchToProps = dispatch => ({
  setSelectedMenuItemId: menuItemId => dispatch(actions.setSelectedMenuItemId(menuItemId)),
});

export default connect(null, mapDispatchToProps)(withRouter(Discover));
