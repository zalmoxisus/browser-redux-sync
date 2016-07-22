## Cross-browser extensions and Chrome apps states syncing
**Support redux-persist 3.x only**
Add syncing to your [redux](https://github.com/gaearon/redux) browser (Chrome and [Firefox](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities#storage)) extension or app.
It listens to the `chrome.storage` for [redux-persist](https://github.com/rt2zz/redux-persist) events. When an event occurs it will dispatch a rehydrate action.

If `chrome.storage` is not defined (for Safari and old versions of Firefox), it includes [redux-persist-crosstab](https://github.com/rt2zz/redux-persist-crosstab) to use `localStorage`.

### Usage
```js
import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { configureSync, sync } from 'browser-redux-sync'
const finalCreateStore = compose(autoRehydrate())(createStore)
const store = finalCreateStore(reducer)

const persistor = persistStore(store, configureSync())
sync(persistor)
```

To blacklist some portion of state, for example if you want to avoid syncing route state:
```js
sync(persistor, {blacklist: ['routeReducerKey']})
```

See [browser-redux](https://github.com/zalmoxisus/browser-redux) for a boilerplate and more details.

### Rehydration Merge
Redux Persist does a shallow merge of state during rehydration. This means that if state changes on two tabs simulataneously, it is possible that legitimate state will be lost in the merge. In most cases this will not be an issue. One scenario where this could happen is if both tabs are listening on a socket and they both receive a message at the same time. If you have this type of set up you will either need to blacklist the relevant reducers or implement a custom rehydration handler that takes into account the nuances of this situation.
