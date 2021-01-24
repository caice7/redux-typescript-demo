import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import rootReducer from './rootReducer';

// NOTE: Do not change middleware delaration pattern since rekit plugins may register middleware to it.
const middlewares: any[] = [
  thunk,
];

/* istanbul ignore if  */
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default function configureStore(initialState?: any): any {
  let middleware = applyMiddleware(...middlewares);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware);
  return store;
}
