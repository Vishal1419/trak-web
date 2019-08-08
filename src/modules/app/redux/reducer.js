import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  selectedMenuItemId: 1,
  isSidebarFolded: false,
  isSidebarVisible: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_MENU_ITEM_ID:
      return {
        ...state,
        selectedMenuItemId: action.payload,
      };
    case actionTypes.TOGGLE_SIDEBAR_FOLDED:
      return {
        ...state,
        isSidebarFolded: !state.isSidebarFolded,
      };
    case actionTypes.SET_SIDEBAR_VISIBILITY:
      return {
        ...state,
        isSidebarVisible: action.payload,
      };
    default:
      return state;
  }
};
