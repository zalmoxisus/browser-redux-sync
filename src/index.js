let configureSync, sync, storage;

if (chrome.storage) {
  configureSync = require('./configure');
  sync = require('./sync');
  storage = require('./storage');
}
else {
  configureSync = {};
  sync = require('redux-persist-crosstab');
  storage = localStorage;
}

export { configureSync, sync, storage };
