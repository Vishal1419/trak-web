import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopTracksSection from './TopTracksSection';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';
import RequestStates from '../../../../utils/request-states';

const TopTracksSectionContainer = ({ getTopTracks, topTracks, loading }) => {
  useEffect(() => {
    getTopTracks();
  }, []);

  return (
    <TopTracksSection loading={loading} topTracks={topTracks} />
  );
};

TopTracksSectionContainer.propTypes = {
  getTopTracks: PropTypes.func,
  topTracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

TopTracksSectionContainer.defaultProps = {
  getTopTracks: noop,
  topTracks: [],
  loading: false,
};

const mapStateToProps = state => ({
  topTracks: state.discover.topTracks,
  loading: state.discover.getTopTracksRequestState === RequestStates.loading,
});

const mapDispatchToProps = dispatch => ({
  getTopTracks: () => dispatch(actions.getTopTracks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTracksSectionContainer);
