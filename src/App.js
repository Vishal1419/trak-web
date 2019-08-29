import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fullscreen from 'react-full-screen';

import './assets/styles/app.scss';
import Routes from './Routes';
import WindowObserver from './shared/components/WindowObserver';
import { actions } from './modules/app';
import { noop } from './utils';

const App = ({ isFullScreen, toggleFullScreen }) => (
  <div className="App">
    <Fullscreen enabled={isFullScreen} onChange={isFull => toggleFullScreen(isFull)}>
      <Routes />
      <WindowObserver />
    </Fullscreen>
  </div>
);

App.propTypes = {
  isFullScreen: PropTypes.bool,
  toggleFullScreen: PropTypes.func,
};

App.defaultProps = {
  isFullScreen: false,
  toggleFullScreen: noop,
};

const mapStateToProps = state => ({
  isFullScreen: state.app.isFullScreen,
});

const mapDispatchToProps = dispatch => ({
  toggleFullScreen: isFullScreen => dispatch(actions.toggleFullScreen(isFullScreen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
