import { takeLatest, put, call } from 'redux-saga/effects';
import ApiCall from '../../config/api';
var numeral = require('numeral');

async function apiGet() {
  try {
    const response = await ApiCall.get('/widgets');

    if (Boolean(response.data.pageViews))
      response.data.pageViews = numeral(response.data.pageViews).format('0.0a');

    return response.data;
  } catch (e) {
    return e;
  }
}

function* getWidgets() {
  try {
    const response = yield call(apiGet);

    yield put({
      type: 'SUCCESS_WIDGETS',
      payload: response
    });
  } catch (err) {
    yield put({ type: 'FAILURE_WIDGETS', errorWidgets: err });
  }
}

export default function* watcherWidgets() {
  yield takeLatest('REQUEST_WIDGETS', getWidgets);
}