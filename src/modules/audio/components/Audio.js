import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

import { regions, genres } from '../../../shared/filters';
import SectionHeader from '../../../shared/components/SectionHeader';
import TracksGrid from '../../../shared/components/TracksGrid';
import NoData from '../../../shared/components/NoData';
import { noop } from '../../../utils';

const Audio = ({
  tracks, loading,
  activeFilters, changeActiveFilters,
}) => (
  <div className="audio">
    <SectionHeader title1="" title2="Filter" />
    <div className="options">
      <div className="countries-container pb-1">
        <span>Countries</span>
        <div className="countries mx-3">
          {
            regions.map(region => (
              <div
                key={region.value}
                className={`filter badge m-1 ${region.value === activeFilters.region ? 'active' : ''}`}
                role="presentation"
                onClick={() => changeActiveFilters('region', region.value)}
              >
                {region.label}
              </div>
            ))
          }
        </div>
      </div>
      <div className="genres-container pb-4">
        <span>Genres</span>
        <div className="genres mx-3">
          {
            genres.map(genre => (
              <div
                key={genre.value}
                className={`filter badge m-1 ${genre.value === activeFilters.genre ? 'active' : ''}`}
                role="presentation"
                onClick={() => changeActiveFilters('genre', genre.value)}
              >
                {genre.label}
              </div>
            ))
          }
        </div>
      </div>
    </div>
    {
      tracks.length > 0
        ? (
          <Fragment>
            <TracksGrid
              tracks={
                tracks.slice(
                  (activeFilters.page - 1) * activeFilters.perPage,
                  activeFilters.page * activeFilters.perPage,
                )
              }
              loading={loading}
            />
            <Pagination size="sm">
              {
                new Array(Math.ceil(tracks.length / activeFilters.perPage))
                  .fill(1).map((_, index) => (
                    <Pagination.Item
                      active={activeFilters.page === (index + 1)}
                      onClick={() => changeActiveFilters('page', index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))
              }
            </Pagination>
          </Fragment>
        )
        : <NoData />
    }
  </div>
);

Audio.propTypes = {
  tracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  activeFilters: PropTypes.instanceOf(Object),
  changeActiveFilters: PropTypes.func,
};

Audio.defaultProps = {
  tracks: [],
  loading: false,
  activeFilters: {},
  changeActiveFilters: noop,
};

export default Audio;
