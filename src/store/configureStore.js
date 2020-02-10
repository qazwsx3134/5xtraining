import { createStore, combineReducers } from 'redux';
import dataReducer from '../reducers/data';


export default () => {
  const store = createStore(
    combineReducers({
      data: dataReducer,
    }),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
