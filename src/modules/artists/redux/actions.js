import * as actionTypes from './actionTypes';
import artists from '../../../data/fake-data/artists';
import { fakeCall } from '../../../utils';

export const getArtists = () => ({
  type: actionTypes.GET_ARTISTS,
  payload: fakeCall(artists, 3000),
});

export const changeActiveFilters = (filter, value) => ({
  type: actionTypes.CHANGE_ACTIVE_FILTERS,
  payload: { filter, value },
});
