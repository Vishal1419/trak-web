import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BannerSection = ({ banners }) => (
  <div className="banner-section">
    <Row noGutters className="banner-group">
      {
        banners.map(banner => (
          <Col sm={6} key={banner.id}>
            <Link to="/" className="banner mb-3">
              <div
                className="banner-description p-5"
                style={{
                  backgroundImage: `url("${banner.image}")`,
                }}
              >
                <h4>{banner.title}</h4>
                <span>{banner.description}</span>
              </div>
            </Link>
          </Col>
        ))
      }
    </Row>
  </div>
);

BannerSection.propTypes = {
  banners: PropTypes.instanceOf(Array),
};

BannerSection.defaultProps = {
  banners: [],
};

export default BannerSection;
