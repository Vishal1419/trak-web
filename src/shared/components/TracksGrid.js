import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TracksGrid = ({ tracks, loading }) => (
  <div className="tracks-grid">
    <Row>
      {
        tracks.map((track) => {
          if (loading && track.id === 'placeholder') {
            return (
              <Col xs={4} sm={4} md={3} lg={2}>
                <div className="track-content-loader">
                  <ContentLoader width="200" height="275">
                    <rect x="0" y="0" rx="5" ry="5" width="200" height="200" />
                    <rect x="0" y="230" rx="5" ry="5" width="200" height="10" />
                    <rect x="0" y="250" rx="5" ry="5" width="150" height="10" />
                  </ContentLoader>
                </div>
              </Col>
            );
          }
          return (
            <Col xs={4} sm={4} md={3} lg={2}>
              <div className="track">
                <div className="track-image-wrapper">
                  <div
                    className="track-image-container"
                    style={{ backgroundImage: `url("${track.image}")` }}
                  />
                  <div className="overlay">
                    <Button className="btn-raised btn-icon btn-play" />
                  </div>
                </div>
                <div className="info">
                  <span className="title">{track.title}</span>
                  <span className="publisher">{track.publisher}</span>
                </div>
              </div>
            </Col>
          );
        })
      }
    </Row>
  </div>
);

TracksGrid.propTypes = {
  tracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

TracksGrid.defaultProps = {
  tracks: [],
  loading: false,
};

export default TracksGrid;
