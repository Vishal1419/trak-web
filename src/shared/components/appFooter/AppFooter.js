import React from 'react';
import MusicPlayer from '../musicPlayer/MusicPlayerContainer';

import SampleMusic1 from '../../../assets/sampleMusic/sample1.mp3';

const AppFooter = () => (
  <MusicPlayer src={SampleMusic1} />
);

export default AppFooter;
