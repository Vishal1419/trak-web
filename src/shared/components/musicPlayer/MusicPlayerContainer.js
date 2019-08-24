import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MusicPlayer from './MusicPlayer';

class MusicPlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { src } = this.props;
    return (
      <MusicPlayer src={src} />
    );
  }
}

MusicPlayerContainer.propTypes = {
  src: PropTypes.string,
};

MusicPlayerContainer.defaultProps = {
  src: '',
};

export default MusicPlayerContainer;
