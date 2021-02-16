import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index.js';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
  rootReducer
);

sagaMiddleware.run(rootSaga);

export default store;
