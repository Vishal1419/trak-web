import * as actionTypes from './actionTypes';

export const setSelectedMenuItemId = menuItemId => ({
  type: actionTypes.SET_SELECTED_MENU_ITEM_ID,
  payload: menuItemId,
});

export const toggleSidebarFolded = () => ({
  type: actionTypes.TOGGLE_SIDEBAR_FOLDED,
});

export const setSidebarVisibility = visibilityFlag => ({
  type: actionTypes.SET_SIDEBAR_VISIBILITY,
  payload: visibilityFlag,
});

export const toggleSearchbarVisibility = visibilityFlag => ({
  type: actionTypes.TOGGLE_SEARCHBAR_VISIBILITY,
  payload: visibilityFlag,
});

export const toggleFullScreen = isFullScreen => ({
  type: actionTypes.TOGGLE_FULL_SCREEN,
  payload: isFullScreen,
});
