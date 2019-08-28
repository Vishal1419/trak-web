import * as actionTypes from './actionTypes';
import tracks from '../../../data/fake-data/tracks';
import { fakeCall } from '../../../utils';

export const getTracks = () => ({
  type: actionTypes.GET_TRACKS,
  payload: fakeCall(tracks, 3000),
});

export const changeActiveFilters = (filter, value) => ({
  type: actionTypes.CHANGE_ACTIVE_FILTERS,
  payload: { filter, value },
});
