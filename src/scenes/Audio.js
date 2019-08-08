import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MainTemplate from '../shared/templates/MainTemplate/MainTemplateContainer';
import { AudioContainer } from '../modules/audio';
import menuItems from '../data/menuItems';
import { actions } from '../modules/app';
import { noop, recursiveFindMenuItemIdByPath } from '../utils';

const Audio = ({ location, setSelectedMenuItemId, setSidebarVisibility }) => {
  useEffect(() => {
    const selectedMenuItemId = recursiveFindMenuItemIdByPath(menuItems, location.pathname);
    setSelectedMenuItemId(selectedMenuItemId);
    setSidebarVisibility(false);
  }, []);

  return (
    <MainTemplate>
      <AudioContainer />
    </MainTemplate>
  );
};

Audio.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  setSelectedMenuItemId: PropTypes.func,
  setSidebarVisibility: PropTypes.func,
};

Audio.defaultProps = {
  setSelectedMenuItemId: noop,
  setSidebarVisibility: noop,
};

const mapDispatchToProps = dispatch => ({
  setSelectedMenuItemId: menuItemId => dispatch(actions.setSelectedMenuItemId(menuItemId)),
  setSidebarVisibility: visibilityFlag => dispatch(actions.setSidebarVisibility(visibilityFlag)),
});

export default connect(null, mapDispatchToProps)(withRouter(Audio));
