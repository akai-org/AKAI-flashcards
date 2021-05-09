import { compose, createStore } from 'redux';
import reducer from './reducers/rootReducer';

const enhancers = compose(
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, enhancers);

export default store;
