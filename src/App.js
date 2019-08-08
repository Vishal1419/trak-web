import React from 'react';
import { Provider } from 'react-redux';

import './assets/styles/app.scss';
import Routes from './Routes';
import reduxStore from './store';
import WindowObserver from './shared/components/WindowObserver';

const App = () => (
  <Provider store={reduxStore}>
    <div className="App">
      <Routes />
      <WindowObserver />
    </div>
  </Provider>
);

export default App;
