import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Charts from './Charts';
import * as actions from '../redux/actions';
import { noop } from '../../../utils';
import RequestStates from '../../../utils/request-states';

const ChartsContainer = ({
  getTracks, tracks, loading,
  activeFilters, changeActiveFilters,
}) => {
  useEffect(() => {
    getTracks();
  }, []);

  return (
    <Charts
      loading={loading}
      tracks={tracks}
      activeFilters={activeFilters}
      changeActiveFilters={changeActiveFilters}
    />
  );
};

ChartsContainer.propTypes = {
  getTracks: PropTypes.func,
  tracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  activeFilters: PropTypes.instanceOf(Object),
  changeActiveFilters: PropTypes.func,
};

ChartsContainer.defaultProps = {
  getTracks: noop,
  tracks: [],
  loading: false,
  activeFilters: [],
  changeActiveFilters: noop,
};

const mapStateToProps = state => ({
  tracks: state.charts.tracks,
  loading: state.charts.getTracksRequestState === RequestStates.loading,
  activeFilters: state.charts.activeFilters,
});

const mapDispatchToProps = dispatch => ({
  getTracks: () => dispatch(actions.getTracks()),
  changeActiveFilters: (filter, value) => dispatch(actions.changeActiveFilters(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);
