import * as actionTypes from './actionTypes';
import banners from '../../../data/fake-data/banners';
import topTracks from '../../../data/fake-data/topTracks';
import recentlyAddedTracks from '../../../data/fake-data/recentlyAddedTracks';
import upcomingEvents from '../../../data/fake-data/upcomingEvents';
import recentBlogs from '../../../data/fake-data/recentBlogs';
import { fakeCall } from '../../../utils';

export const getBanners = () => ({
  type: actionTypes.GET_BANNERS,
  payload: fakeCall(banners, 0),
});

export const getTopTracks = () => ({
  type: actionTypes.GET_TOP_TRACKS,
  payload: fakeCall(topTracks, 3000),
});

export const getRecentlyAddedTracks = () => ({
  type: actionTypes.GET_RECENTLY_ADDED_TRACKS,
  payload: fakeCall(recentlyAddedTracks, 3000),
});

export const getUpcomingEvents = () => ({
  type: actionTypes.GET_UPCOMING_EVENTS,
  payload: fakeCall(upcomingEvents, 2000),
});

export const getRecentBlogs = () => ({
  type: actionTypes.GET_RECENT_BLOGS,
  payload: fakeCall(recentBlogs, 2500),
});
