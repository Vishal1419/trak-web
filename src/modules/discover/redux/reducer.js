import * as actionTypes from './actionTypes';

import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  getBannersRequestState: RequestStates.init,
  banners: [],
  getBannersError: null,
  getTopTracksRequestState: RequestStates.init,
  topTracks: [],
  getTopTracksError: null,
  getRecentlyAddedTracksRequestState: RequestStates.init,
  recentlyAddedTracks: [],
  getRecentlyAddedTracksError: null,
  getUpcomingEventsRequestState: RequestStates.init,
  upcomingEvents: [],
  getUpcomingEventsError: null,
  getRecentBlogsRequestState: RequestStates.init,
  recentBlogs: [],
  getRecentBlogsError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_BANNERS_LOADING:
      return {
        ...state,
        getBannersRequestState: RequestStates.loading,
        getBannersError: null,
      };
    case actionTypes.GET_BANNERS_SUCCESS:
      return {
        ...state,
        getBannersRequestState: RequestStates.success,
        getBannersError: null,
        banners: action.payload,
      };
    case actionTypes.GET_BANNERS_ERROR:
      return {
        getBannersRequestState: RequestStates.error,
        getBannersError: action.payload,
      };
    case actionTypes.GET_TOP_TRACKS_LOADING:
      return {
        ...state,
        getTopTracksRequestState: RequestStates.loading,
        getTopTracksError: null,
        topTracks: [
          ...state.topTracks,
          ...new Array(10).fill({ id: 'placeholder' }),
        ],
      };
    case actionTypes.GET_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        getTopTracksRequestState: RequestStates.success,
        getTopTracksError: null,
        topTracks: action.payload,
      };
    case actionTypes.GET_TOP_TRACKS_ERROR:
      return {
        getTopTracksRequestState: RequestStates.error,
        getTopTracksError: action.payload,
      };
    case actionTypes.GET_RECENTLY_ADDED_TRACKS_LOADING:
      return {
        ...state,
        getRecentlyAddedTracksRequestState: RequestStates.loading,
        getRecentlyAddedTracksError: null,
        recentlyAddedTracks: [
          ...state.recentlyAddedTracks,
          ...new Array(5).fill({ id: 'placeholder' }),
        ],
      };
    case actionTypes.GET_RECENTLY_ADDED_TRACKS_SUCCESS:
      return {
        ...state,
        getRecentlyAddedTracksRequestState: RequestStates.success,
        getRecentlyAddedTracksError: null,
        recentlyAddedTracks: action.payload,
      };
    case actionTypes.GET_RECENTLY_ADDED_TRACKS_ERROR:
      return {
        getRecentlyAddedTracksRequestState: RequestStates.error,
        getRecentlyAddedTracksError: action.payload,
      };
    case actionTypes.GET_UPCOMING_EVENTS_LOADING:
      return {
        ...state,
        getUpcomingEventsRequestState: RequestStates.loading,
        getUpcomingEventsError: null,
        upcomingEvents: [
          ...state.upcomingEvents,
          ...new Array(2).fill({ id: 'placeholder' }),
        ],
      };
    case actionTypes.GET_UPCOMING_EVENTS_SUCCESS:
      return {
        ...state,
        getUpcomingEventsRequestState: RequestStates.success,
        getUpcomingEventsError: null,
        upcomingEvents: action.payload,
      };
    case actionTypes.GET_UPCOMING_EVENTS_ERROR:
      return {
        getUpcomingEventsRequestState: RequestStates.error,
        getUpcomingEventsError: action.payload,
      };
    case actionTypes.GET_RECENT_BLOGS_LOADING:
      return {
        ...state,
        getRecentBlogsRequestState: RequestStates.loading,
        getRecentBlogsError: null,
        recentBlogs: [
          ...state.recentBlogs,
          ...new Array(3).fill({ id: 'placeholder' }),
        ],
      };
    case actionTypes.GET_RECENT_BLOGS_SUCCESS:
      return {
        ...state,
        getRecentBlogsRequestState: RequestStates.success,
        getRecentBlogsError: null,
        recentBlogs: action.payload,
      };
    case actionTypes.GET_RECENT_BLOGS_ERROR:
      return {
        getRecentBlogsRequestState: RequestStates.error,
        getRecentBlogsError: action.payload,
      };
    default:
      return state;
  }
};
