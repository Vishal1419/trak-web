import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RecentlyAddedTracksSection from './RecentlyAddedTracksSection';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';
import RequestStates from '../../../../utils/request-states';

const RecentlyAddedTracksSectionContainer = ({
  getRecentlyAddedTracks, recentlyAddedTracks, loading,
}) => {
  useEffect(() => {
    getRecentlyAddedTracks();
  }, []);

  return (
    <RecentlyAddedTracksSection loading={loading} recentlyAddedTracks={recentlyAddedTracks} />
  );
};

RecentlyAddedTracksSectionContainer.propTypes = {
  getRecentlyAddedTracks: PropTypes.func,
  recentlyAddedTracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

RecentlyAddedTracksSectionContainer.defaultProps = {
  getRecentlyAddedTracks: noop,
  recentlyAddedTracks: [],
  loading: false,
};

const mapStateToProps = state => ({
  recentlyAddedTracks: state.discover.recentlyAddedTracks,
  loading: state.discover.getRecentlyAddedTracksRequestState === RequestStates.loading,
});

const mapDispatchToProps = dispatch => ({
  getRecentlyAddedTracks: () => dispatch(actions.getRecentlyAddedTracks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyAddedTracksSectionContainer);
