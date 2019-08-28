import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title1, title2 }) => (
  <div className="section-header py-2">
    <span className="text-sm">{title1}</span>
    <h5>{title2}</h5>
  </div>
);

SectionHeader.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
};

SectionHeader.defaultProps = {
  title1: '',
  title2: '',
};

export default SectionHeader;
