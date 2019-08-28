import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BannerSection from './BannerSection/BannerSectionContainer';
import TopTracksSection from './TopTracksSection/TopTracksSectionContainer';
import RecentlyAddedTracksSection from './RecentlyAddedTracksSection/RecentlyAddedTracksSectionContainer';
import UpcomingEventsSection from './UpcomingEventsSection/UpcomingEventsSectionContainer';
import RecentBlogsSection from './RecentBlogsSection/RecentBlogsSectionContainer';

const Discover = () => (
  <div className="discover">
    <BannerSection />
    <TopTracksSection />
    <Row>
      <Col md={6}>
        <RecentlyAddedTracksSection />
      </Col>
      <Col md={6}>
        <Row>
          <Col md={12}>
            <UpcomingEventsSection />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <RecentBlogsSection />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Discover;
