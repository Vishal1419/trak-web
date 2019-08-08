import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '../../modules/app';
import { debounce, noop } from '../../utils';

const WindowObserver = ({ setSidebarVisibility }) => {
  useEffect(() => {
    const handleResize = () => debounce(() => {
      if (window.innerWidth >= 992) {
        setSidebarVisibility(false);
      }
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <span />;
};

WindowObserver.propTypes = {
  setSidebarVisibility: PropTypes.func,
};

WindowObserver.defaultProps = {
  setSidebarVisibility: noop,
};

const mapDispatchToProps = dispatch => ({
  setSidebarVisibility: visibilityFlag => dispatch(actions.setSidebarVisibility(visibilityFlag)),
});

export default connect(null, mapDispatchToProps)(WindowObserver);
