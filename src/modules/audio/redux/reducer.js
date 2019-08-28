import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  getTracksRequestState: RequestStates.init,
  _tracks: [],
  tracks: [],
  getTracksError: null,
  activeFilters: {
    sort: 2,
    region: 0,
    genre: 0,
    page: 1,
    perPage: 18,
    total: 0,
  },
};

const filterTracks = (tracks, activeFilters) => {
  let _tracks = tracks;

  if (activeFilters.sort === 1) {
    _tracks = _tracks.sort((a, b) => b.likes - a.likes);
  } else if (activeFilters.sort === 2) {
    _tracks = _tracks.sort((a, b) => b.date - a.date);
  }

  if (activeFilters.region > 0) {
    _tracks = _tracks.filter(track => track.region === activeFilters.region);
  }

  if (activeFilters.genre > 0) {
    _tracks = _tracks.filter(track => track.genre === activeFilters.genre);
  }

  return _tracks;
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TRACKS_LOADING:
      return {
        ...state,
        getTracksRequestState: RequestStates.loading,
        getTracksError: null,
        tracks: [
          ...state.tracks,
          ...new Array(21).fill({ id: 'placeholder' }),
        ],
      };
    case actionTypes.GET_TRACKS_SUCCESS:
      return {
        ...state,
        getTracksRequestState: RequestStates.success,
        getTracksError: null,
        _tracks: action.payload,
        tracks: filterTracks(action.payload, state.activeFilters),
        activeFilters: {
          ...state.activeFilters,
          total: action.payload.length,
        },
      };
    case actionTypes.GET_TRACKS_ERROR:
      return {
        ...state,
        getTracksRequestState: RequestStates.error,
        getTracksError: action.payload,
      };
    case actionTypes.CHANGE_ACTIVE_FILTERS: {
      const activeFilters = {
        ...state.activeFilters,
        [action.payload.filter]: action.payload.value,
      };
      if (action.payload.filter !== 'page') {
        activeFilters.page = 1;
      }
      return {
        ...state,
        activeFilters,
        tracks: filterTracks(state._tracks, activeFilters),
      };
    }
    default:
      return state;
  }
};
