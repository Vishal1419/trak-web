import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Artists from './Artists';
import * as actions from '../redux/actions';
import { noop } from '../../../utils';
import RequestStates from '../../../utils/request-states';

const ArtistsContainer = ({
  getArtists, artists, loading,
  activeFilters, changeActiveFilters,
}) => {
  useEffect(() => {
    getArtists();
  }, []);

  return (
    <Artists
      loading={loading}
      artists={artists}
      activeFilters={activeFilters}
      changeActiveFilters={changeActiveFilters}
    />
  );
};

ArtistsContainer.propTypes = {
  getArtists: PropTypes.func,
  artists: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  activeFilters: PropTypes.instanceOf(Object),
  changeActiveFilters: PropTypes.func,
};

ArtistsContainer.defaultProps = {
  getArtists: noop,
  artists: [],
  loading: false,
  activeFilters: [],
  changeActiveFilters: noop,
};

const mapStateToProps = state => ({
  artists: state.artists.artists,
  loading: state.artists.getArtistsRequestState === RequestStates.loading,
  activeFilters: state.artists.activeFilters,
});

const mapDispatchToProps = dispatch => ({
  getArtists: () => dispatch(actions.getArtists()),
  changeActiveFilters: (filter, value) => dispatch(actions.changeActiveFilters(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsContainer);
