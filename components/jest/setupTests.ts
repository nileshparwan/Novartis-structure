
import "jest-environment-jsdom"; 

export var localStorageMock = (function () {
  var store: any = {};
  return {
    getItem: function (key: any) {
      return store[key];
    },
    setItem: function (key: any, value: any) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key: any) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
