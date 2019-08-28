import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionHeader from '../../../../shared/components/SectionHeader';

const RecentBlogsSection = ({ recentBlogs, loading }) => (
  <div className="recent-blogs-section">
    <SectionHeader title1="blog" title2="News" />
    <div className="recent-blogs">
      <Row>
        {
          recentBlogs.map((blog) => {
            if (loading && blog.id === 'placeholder') {
              return (
                <Col xs={4}>
                  <ContentLoader width="135" height="175">
                    <rect x="0" y="0" rx="5" ry="5" width="135" height="75" />
                    <rect x="0" y="91" rx="5" ry="5" width="135" height="10" />
                    <rect x="0" y="106" rx="5" ry="5" width="50" height="10" />
                    <rect x="0" y="132" rx="5" ry="5" width="135" height="8" />
                  </ContentLoader>
                </Col>
              );
            }
            return (
              <Col xs={4}>
                <div className="blog">
                  <div
                    className="blog-image-container"
                    style={{ backgroundImage: `url("${blog.image}")` }}
                  />
                  <span className="title">{blog.title}</span>
                  <span className="date">{blog.date}</span>
                </div>
              </Col>
            );
          })
        }
      </Row>
    </div>
  </div>
);

RecentBlogsSection.propTypes = {
  recentBlogs: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

RecentBlogsSection.defaultProps = {
  recentBlogs: [],
  loading: false,
};

export default RecentBlogsSection;
