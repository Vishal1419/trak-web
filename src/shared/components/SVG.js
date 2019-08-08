import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  height, width, viewBox, fill, className, style, path,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox={viewBox}
    fill={`${fill}` || '#000'}
  >
    <g className={className} style={style}>
      <path d={path} />
    </g>
  </svg>
);

SVG.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  path: PropTypes.string.isRequired,
};

SVG.defaultProps = {
  height: 32,
  width: 32,
  viewBox: '0 0 512 512',
  fill: '#000',
  className: '',
  style: {},
};

export default SVG;
