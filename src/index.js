let sync, storage;

if (chrome.storage) {
  sync = require('./sync');
  storage = require('./storage');
}
else {
  sync = require('redux-persist-crosstab');
  storage = localStorage;
}

export { sync, storage };
