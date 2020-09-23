import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import movies from './movies'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    movies
});

const configureStore = () => {
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default configureStore;