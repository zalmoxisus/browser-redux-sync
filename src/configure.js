import storage from './storage';

export default function configureSync(config = {}) {
  return  {
    ...config,
    storage: storage,
    createPersistor: true,
    serialize: data => data,
    deserialize: data => data,
    debounce: 0
  }
}
