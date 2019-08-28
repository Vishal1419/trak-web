export const noop = () => {};

export const fakeCall = (response, timeout) => new Promise((resolve) => {
  setTimeout(() => resolve(response), timeout);
});

export const recursiveFindMenuItemIdByPath = (menuItems, currentPath) => {
  let returnValue = 0;
  menuItems.some((menuItem) => {
    if (menuItem.url === currentPath) {
      returnValue = menuItem.id;
      return true;
    }
    if (menuItem.subitems && menuItem.subitems.length > 0) {
      returnValue = recursiveFindMenuItemIdByPath(menuItem.subitems, currentPath);
      if (returnValue > 0) return true;
    }
    return false;
  });
  return returnValue;
};

let timerId;
export const debounce = (fn, delay) => { // eslint-disable-line
  return ((...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  })();
};
