import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import ContentLoader from 'react-content-loader';

import SectionHeader from '../../../../shared/components/SectionHeader';

const TopTracksSection = ({ topTracks, loading }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
  };
  return (
    <div className="top-tracks-section">
      <SectionHeader title1="Weekly" title2="Top tracks" />
      <Slider {...settings} className="top-tracks-slider">
        {
          topTracks.map((track) => {
            if (loading && track.id === 'placeholder') {
              return (
                <ContentLoader width="155" height="210">
                  <rect x="15" y="0" rx="5" ry="5" width="125" height="125" />
                  <rect x="15" y="145" rx="4" ry="4" width="125" height="10" />
                  <rect x="15" y="165" rx="3" ry="3" width="125" height="10" />
                </ContentLoader>
              );
            }
            return (
              <div className="track">
                <div
                  className="track-image-container"
                  style={{ backgroundImage: `url("${track.image}")` }}
                >
                  <div className="overlay">
                    <Button className="btn-raised btn-icon btn-play" />
                  </div>
                </div>
                <span className="title">{track.title}</span>
                <span className="publisher">{track.publisher}</span>
              </div>
            );
          })
        }
      </Slider>
    </div>
  );
};

TopTracksSection.propTypes = {
  topTracks: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

TopTracksSection.defaultProps = {
  topTracks: [],
  loading: false,
};

export default TopTracksSection;
