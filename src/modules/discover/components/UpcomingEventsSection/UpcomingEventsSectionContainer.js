import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UpcomingEventsSection from './UpcomingEventsSection';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';
import RequestStates from '../../../../utils/request-states';

const UpcomingEventsSectionContainer = ({
  getUpcomingEvents, upcomingEvents, loading,
}) => {
  useEffect(() => {
    getUpcomingEvents();
  }, []);

  return (
    <UpcomingEventsSection loading={loading} upcomingEvents={upcomingEvents} />
  );
};

UpcomingEventsSectionContainer.propTypes = {
  getUpcomingEvents: PropTypes.func,
  upcomingEvents: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

UpcomingEventsSectionContainer.defaultProps = {
  getUpcomingEvents: noop,
  upcomingEvents: [],
  loading: false,
};

const mapStateToProps = state => ({
  upcomingEvents: state.discover.upcomingEvents,
  loading: state.discover.getUpcomingEventsRequestState === RequestStates.loading,
});

const mapDispatchToProps = dispatch => ({
  getUpcomingEvents: () => dispatch(actions.getUpcomingEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEventsSectionContainer);
