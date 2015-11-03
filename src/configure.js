import storage from './storage';

export default function configureSync(config = {}) {
  return  {
    ...config,
    storage: storage,
    skipRestore: true,
    serialize: data => data,
    deserialize: data => data,
    debounce: 0
  }
}
