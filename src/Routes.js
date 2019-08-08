import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Discover from './scenes/Discover';
import Charts from './scenes/Charts';
import Audio from './scenes/Audio';
import Artists from './scenes/Artists';

// import NotFound from './scenes/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Discover} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/audio" component={Audio} />
      <Route exact path="/artists" component={Artists} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
