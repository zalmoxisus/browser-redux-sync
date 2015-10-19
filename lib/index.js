'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sync = undefined,
    storage = undefined;

if (chrome.storage) {
  exports.sync = sync = require('./sync');
  exports.storage = storage = require('./storage');
} else {
  exports.sync = sync = require('redux-persist-crosstab');
  exports.storage = storage = localStorage;
}

exports.sync = sync;
exports.storage = storage;