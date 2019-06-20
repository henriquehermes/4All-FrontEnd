import 'regenerator-runtime/runtime';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import widgets from './ducks/widgets';
import pageViews from './ducks/pageViews';
import messages from './ducks/messages';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    widgets,
    pageViews,
    messages
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
