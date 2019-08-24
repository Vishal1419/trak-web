import React from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'react-wavesurfer';

const Timeline = require('react-wavesurfer/lib/plugins/timeline').default;

const MusicPlayer = ({ src }) => (
  <WaveSurfer
    audioFile={src}
    // options={{
    //   waveColor: '#428bca',
    //   progressColor: '#31708f',
    //   height: 8,
    //   barWidth: 1,
    // }}
  >
    <Timeline
      height="100"
      // options={{
      //   height: 100,
      // }}
    />
  </WaveSurfer>
);

MusicPlayer.propTypes = {
  src: PropTypes.string,
};

MusicPlayer.defaultProps = {
  src: '',
};

export default MusicPlayer;
