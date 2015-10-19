var storage = chrome.storage.local;

storage.getItem = function(key, callback) {
  chrome.storage.local.get(key, function (obj) {
    if (obj[key]) callback(null, obj[key]);
    else callback(chrome.runtime.lastError, null);
  });
};

storage.setItem = function(key, value, callback) {
  var obj = {};
  obj[key] = value;
  chrome.storage.local.set(obj, function() {
    if (chrome.runtime.lastError) callback(key);
  });
};

storage.removeItem = storage.remove;

storage.getAllKeys = function(callback) {
  chrome.storage.local.get(null, function(obj) {
    callback(null, Object.keys(obj));
  });
};

module.exports = storage;
