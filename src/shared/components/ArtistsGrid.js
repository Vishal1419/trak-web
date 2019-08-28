import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import Row from 'react-bootstrap/Row';

const ArtistsGrid = ({ artists, loading }) => (
  <div className="artists-grid">
    <Row>
      {
        artists.map((artist) => {
          if (loading && artist.id === 'placeholder') {
            return (
              <div className="col-4 col-sm-3 col-md-2-4 col-lg-2 col-xl-1-8">
                <div className="artist-content-loader">
                  <ContentLoader width="200" height="240">
                    <circle cx="100" cy="100" r="100" />
                    <rect x="0" y="220" rx="5" ry="5" width="200" height="10" />
                  </ContentLoader>
                </div>
              </div>
            );
          }
          return (
            <div className="col-4 col-sm-3 col-md-2-4 col-lg-2 col-xl-1-8">
              <div className="artist">
                <div
                  className="artist-image-container"
                  style={{ backgroundImage: `url("${artist.image}")` }}
                />
                <span className="title">{artist.name}</span>
              </div>
            </div>
          );
        })
      }
    </Row>
  </div>
);

ArtistsGrid.propTypes = {
  artists: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

ArtistsGrid.defaultProps = {
  artists: [],
  loading: false,
};

export default ArtistsGrid;
