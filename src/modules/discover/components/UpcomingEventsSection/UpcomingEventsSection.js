import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionHeader from '../../../../shared/components/SectionHeader';

const UpcomingEventsSection = ({ upcomingEvents, loading }) => (
  <div className="upcoming-events-section">
    <SectionHeader title1="Upcoming" title2="Events" />
    <div className="upcoming-events">
      <Row>
        {
          upcomingEvents.map((event) => {
            if (loading && event.id === 'placeholder') {
              return (
                <Col md={6}>
                  <ContentLoader width="210" height="108">
                    <rect x="24" y="24" rx="5" ry="5" width="162" height="10" />
                    <rect x="24" y="54" rx="5" ry="5" width="162" height="10" />
                  </ContentLoader>
                </Col>
              );
            }
            return (
              <Col md={6}>
                <div className={`event gd-${event.type}`}>
                  <h5>{event.name}</h5>
                  <span className="text-sm">{event.date}</span>
                </div>
              </Col>
            );
          })
        }
      </Row>
    </div>
  </div>
);

UpcomingEventsSection.propTypes = {
  upcomingEvents: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

UpcomingEventsSection.defaultProps = {
  upcomingEvents: [],
  loading: false,
};

export default UpcomingEventsSection;
