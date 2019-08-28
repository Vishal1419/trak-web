import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

import { regions } from '../../../shared/filters';
import SectionHeader from '../../../shared/components/SectionHeader';
import ArtistsGrid from '../../../shared/components/ArtistsGrid';
import NoData from '../../../shared/components/NoData';
import { noop } from '../../../utils';

const Artists = ({
  artists, loading,
  activeFilters, changeActiveFilters,
}) => (
  <div className="artists">
    <SectionHeader title1="Featured" title2="Artists" />
    <div className="options">
      <div className="countries-container pb-4">
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
    </div>
    {
      artists.length > 0
        ? (
          <Fragment>
            <ArtistsGrid
              artists={
                artists.slice(
                  (activeFilters.page - 1) * activeFilters.perPage,
                  activeFilters.page * activeFilters.perPage,
                )
              }
              loading={loading}
            />
            <Pagination size="sm">
              {
                new Array(Math.ceil(artists.length / activeFilters.perPage))
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

Artists.propTypes = {
  artists: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  activeFilters: PropTypes.instanceOf(Object),
  changeActiveFilters: PropTypes.func,
};

Artists.defaultProps = {
  artists: [],
  loading: false,
  activeFilters: {},
  changeActiveFilters: noop,
};

export default Artists;
