import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { sorts, regions, genres } from '../../../shared/filters';
import SectionHeader from '../../../shared/components/SectionHeader';
import TracksList from '../../../shared/components/TracksList';
import { noop } from '../../../utils';
import NoData from '../../../shared/components/NoData';

const Charts = ({
  tracks, loading,
  activeFilters, changeActiveFilters,
}) => (
  <div className="charts">
    <SectionHeader title1="Top" title2="Charts" />
    <div className="options">
      <div className="sort">
        <DropdownButton
          title={sorts.find(sortType => sortType.value === activeFilters.sort).label}
          variant="outline-primary"
        >
          {
            sorts.map(sortType => (
              <Dropdown.Item
                key={sortType.value}
                onSelect={() => changeActiveFilters('sort', sortType.value)}
              >
                {sortType.label}
              </Dropdown.Item>
            ))
          }
        </DropdownButton>
      </div>
      <div className="filters">
        <DropdownButton
          title={regions.find(region => region.value === activeFilters.region).label}
          variant="outline-primary"
        >
          {
            regions.map(region => (
              <Dropdown.Item
                key={region.value}
                onSelect={() => changeActiveFilters('region', region.value)}
              >
                {region.label}
              </Dropdown.Item>
            ))
          }
        </DropdownButton>
        <DropdownButton
          title={genres.find(genre => genre.value === activeFilters.genre).label}
          variant="outline-primary"
        >
          {
            genres.map(genre => (
              <Dropdown.Item
                key={genre.value}
                onSelect={() => changeActiveFilters('genre', genre.value)}
              >
                {genre.label}
              </Dropdown.Item>
            ))
          }
        </DropdownButton>
      </div>
    </div>
    {
      tracks.length > 0
        ? <TracksList tracks={tracks} loading={loading} />
        : <NoData />
    }
  </div>
);

Charts.propTypes = {
  tracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  activeFilters: PropTypes.instanceOf(Object),
  changeActiveFilters: PropTypes.func,
};

Charts.defaultProps = {
  tracks: [],
  loading: false,
  activeFilters: {},
  changeActiveFilters: noop,
};

export default Charts;
