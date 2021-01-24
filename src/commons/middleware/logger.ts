import { Middleware } from "redux";

const logger: Middleware = (store) => (next) => (action) => {
	// tslint:disable-next-line:no-console
  console.group(action.type);
  // tslint:disable-next-line:no-console
  console.info('dispatching', action);
  // tslint:disable-next-line:no-console
  console.log('next state', store.getState());
  // tslint:disable-next-line:no-console
  console.groupEnd(); 
	return next(action);
};

export default logger;
