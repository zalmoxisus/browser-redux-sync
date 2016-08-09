var constants = require('redux-persist/constants');
var keyPrefix = constants.keyPrefix;
var isEqual = require('lodash/lang/isEqual');

function sync(persistor, config){
  if (config === undefined) config = {};
  var blacklist = config.blacklist || false;
  var whitelist = config.whitelist || false;

  chrome.storage.onChanged.addListener(handleStorageEvent);

  function handleStorageEvent(e){
    var key = Object.keys(e)[0];
    if(key && key.indexOf(keyPrefix) === 0 && (!chrome.storage.local._lastData || !isEqual(e[key].newValue, chrome.storage.local._lastData))){
      var keyspace = key.substr(keyPrefix.length);
      if(whitelist && whitelist.indexOf(keyspace) === -1){ return }
      if(blacklist && blacklist.indexOf(keyspace) !== -1){ return }

      persistor.rehydrate({ [keyspace]: e[key].newValue })
    }
  }
}

module.exports = sync;
