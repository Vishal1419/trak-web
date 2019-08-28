import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BannerSection from './BannerSection';
import * as actions from '../../redux/actions';
import { noop } from '../../../../utils';

const BannerSectionContainer = ({ getBanners, banners }) => {
  useEffect(() => {
    getBanners();
  }, []);

  return (
    <BannerSection banners={banners} />
  );
};

BannerSectionContainer.propTypes = {
  getBanners: PropTypes.func,
  banners: PropTypes.instanceOf(Array),
};

BannerSectionContainer.defaultProps = {
  getBanners: noop,
  banners: [],
};

const mapStateToProps = state => ({
  banners: state.discover.banners,
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => dispatch(actions.getBanners()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BannerSectionContainer);
