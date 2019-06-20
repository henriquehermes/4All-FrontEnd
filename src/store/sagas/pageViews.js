import { takeLatest, put, call } from 'redux-saga/effects';
import ApiCall from '../../config/api';

async function apiGet() {
  try {
    const response = await ApiCall.get('/pageViews');

    return response.data;
  } catch (e) {
    return e;
  }
}

function* getPageViews() {
  try {
    const response = yield call(apiGet);

    yield put({
      type: 'SUCCESS_PAGE_VIEWS',
      payload: response
    });
  } catch (err) {
    yield put({ type: 'FAILURE_PAGE_VIEWS', errorPageViews: err });
  }
}

export default function* watcherPageViews() {
  yield takeLatest('REQUEST_PAGE_VIEWS', getPageViews);
}
