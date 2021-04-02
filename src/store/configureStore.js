import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import lessonsReducer from '../reducers/lessons';
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// each time dispatch is called, createStore is run again
export default () => {
  const store = createStore(
    combineReducers({
    	user: userReducer,
  		auth: authReducer,
  		lessons: lessonsReducer,
  		filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
