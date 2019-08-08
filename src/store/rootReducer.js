import { combineReducers } from 'redux';
import { reducer as AppReducer } from '../modules/app';
import { reducer as DiscoverReducer } from '../modules/discover';
import { reducer as ChartsReducer } from '../modules/charts';
import { reducer as AudioReducer } from '../modules/audio';
import { reducer as ArtistsReducer } from '../modules/artists';

const rootReducer = combineReducers({
  app: AppReducer,
  discover: DiscoverReducer,
  charts: ChartsReducer,
  audio: AudioReducer,
  artists: ArtistsReducer,
});

export default rootReducer;
