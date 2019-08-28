import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  getArtistsRequestState: RequestStates.init,
  _artists: [],
  artists: [],
  getArtistsError: null,
  activeFilters: {
    region: 0,
    page: 1,
    perPage: 18,
    total: 0,
  },
};

const filterArtists = (artists, activeFilters) => {
  let _artists = artists;

  if (activeFilters.region > 0) {
    _artists = _artists.filter(artist => artist.region === activeFilters.region);
  }

  return _artists;
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTISTS_LOADING:
      return {
        ...state,
        getArtistsRequestState: RequestStates.loading,
        getArtistsError: null,
        artists: [
          ...state.artists,
          ...new Array(18).fill({ id: 'placeholder' }),
        ],
      };
    case actionTypes.GET_ARTISTS_SUCCESS:
      return {
        ...state,
        getArtistsRequestState: RequestStates.success,
        getArtistsError: null,
        _artists: action.payload,
        artists: filterArtists(action.payload, state.activeFilters),
        activeFilters: {
          ...state.activeFilters,
          total: action.payload.length,
        },
      };
    case actionTypes.GET_ARTISTS_ERROR:
      return {
        ...state,
        getArtistsRequestState: RequestStates.error,
        getArtistsError: action.payload,
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
        artists: filterArtists(state._artists, activeFilters),
      };
    }
    default:
      return state;
  }
};
