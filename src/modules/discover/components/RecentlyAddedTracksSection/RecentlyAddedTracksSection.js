import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../../../../shared/components/SectionHeader';
import TracksList from '../../../../shared/components/TracksList';

const RecentlyAddedTracksSection = ({ recentlyAddedTracks, loading }) => (
  <div className="recently-added-tracks-section">
    <SectionHeader title1="User" title2="Recently added" />
    <TracksList tracks={recentlyAddedTracks} loading={loading} />
  </div>
);

RecentlyAddedTracksSection.propTypes = {
  recentlyAddedTracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

RecentlyAddedTracksSection.defaultProps = {
  recentlyAddedTracks: [],
  loading: false,
};

export default RecentlyAddedTracksSection;
