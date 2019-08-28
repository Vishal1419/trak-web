import React from 'react';
import MusicPlayer from '../musicPlayer/MusicPlayerContainer';

import SampleMusic1 from '../../../assets/sampleMusic/sample1.mp3';

const AppFooter = () => (
  <div className="app-footer">
    <MusicPlayer src={SampleMusic1} />
  </div>
);

export default AppFooter;
