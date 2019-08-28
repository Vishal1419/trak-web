import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Audio from './Audio';
import * as actions from '../redux/actions';
import { noop } from '../../../utils';
import RequestStates from '../../../utils/request-states';

const AudioContainer = ({
  getTracks, tracks, loading,
  activeFilters, changeActiveFilters,
}) => {
  useEffect(() => {
    getTracks();
  }, []);

  return (
    <Audio
      loading={loading}
      tracks={tracks}
      activeFilters={activeFilters}
      changeActiveFilters={changeActiveFilters}
    />
  );
};

AudioContainer.propTypes = {
  getTracks: PropTypes.func,
  tracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  activeFilters: PropTypes.instanceOf(Object),
  changeActiveFilters: PropTypes.func,
};

AudioContainer.defaultProps = {
  getTracks: noop,
  tracks: [],
  loading: false,
  activeFilters: [],
  changeActiveFilters: noop,
};

const mapStateToProps = state => ({
  tracks: state.audio.tracks,
  loading: state.audio.getTracksRequestState === RequestStates.loading,
  activeFilters: state.audio.activeFilters,
});

const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(actions.getTracks()),
  changeActiveFilters: (filter, value) => dispatch(actions.changeActiveFilters(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioContainer);
