import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const TracksList = ({ tracks, loading }) => (
  <div className="tracks-list">
    <Row>
      {
        tracks.map((track, index) => {
          if (loading && track.id === 'placeholder') {
            return (
              <Col md={12}>
                <div className="track-content-loader">
                  <ContentLoader width="430" height="88">
                    <text x="10" y="44">{index + 1}</text>
                    <rect x="56" y="12" rx="5" ry="5" width="64" height="64" />
                    <rect x="138" y="24" rx="5" ry="5" width="150" height="10" />
                    <rect x="138" y="44" rx="5" ry="5" width="150" height="10" />
                    <rect x="330" y="34" rx="5" ry="5" width="34" height="10" />
                    <rect x="392" y="34" rx="5" ry="5" width="15" height="10" />
                  </ContentLoader>
                </div>
              </Col>
            );
          }
          return (
            <Col md={12}>
              <div className="track">
                <span className="index">{index + 1}</span>
                <div
                  className="track-image-container"
                  style={{ backgroundImage: `url("${track.image}")` }}
                >
                  <div className="overlay">
                    <Button className="btn-raised btn-icon btn-play" />
                  </div>
                </div>
                <div className="info">
                  <span className="title">{track.title}</span>
                  <span className="publisher">{track.publisher}</span>
                </div>
                <div className="actions">
                  <span className="spacer" />
                  <span className="duration">{track.duration}</span>
                  <DropdownButton
                    alignRight
                    className="btn-icon"
                    title=""
                    id="dropdown-menu-align-right"
                    variant="more"
                  >
                    <Dropdown.Item>Play</Dropdown.Item>
                    <Dropdown.Item>Next to play</Dropdown.Item>
                    <Dropdown.Item>Add to queue</Dropdown.Item>
                    <Dropdown.Item>Add to playlist</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Share</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </Col>
          );
        })
      }
    </Row>
  </div>
);

TracksList.propTypes = {
  tracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

TracksList.defaultProps = {
  tracks: [],
  loading: false,
};

export default TracksList;
