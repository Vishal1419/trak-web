import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RecentBlogsSection from './RecentBlogsSection';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';
import RequestStates from '../../../../utils/request-states';

const RecentBlogsSectionContainer = ({
  getRecentBlogs, recentBlogs, loading,
}) => {
  useEffect(() => {
    getRecentBlogs();
  }, []);

  return (
    <RecentBlogsSection loading={loading} recentBlogs={recentBlogs} />
  );
};

RecentBlogsSectionContainer.propTypes = {
  getRecentBlogs: PropTypes.func,
  recentBlogs: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

RecentBlogsSectionContainer.defaultProps = {
  getRecentBlogs: noop,
  recentBlogs: [],
  loading: false,
};

const mapStateToProps = state => ({
  recentBlogs: state.discover.recentBlogs,
  loading: state.discover.getRecentBlogsRequestState === RequestStates.loading,
});

const mapDispatchToProps = dispatch => ({
  getRecentBlogs: () => dispatch(actions.getRecentBlogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentBlogsSectionContainer);
