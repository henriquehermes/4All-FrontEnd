import { all, fork } from 'redux-saga/effects';
import watcherWidgets from './widgets';
import watcherPageViews from './pageViews';
import watcherMessages from './messages';

export default function* rootSaga() {
  yield all([
    fork(watcherWidgets),
    fork(watcherPageViews),
    fork(watcherMessages)
  ]);
}
