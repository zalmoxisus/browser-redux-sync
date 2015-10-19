import storage from './storage';

export default function configureSync(config = {}) {
  return  {
    ...config,
    storage: storage,
    serialize: data => data,
    deserialize: data => data
  }
}
