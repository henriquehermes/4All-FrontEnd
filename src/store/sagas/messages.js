import { takeLatest, put, call } from 'redux-saga/effects';
import ApiCall from '../../config/api';

async function apiGet() {
  try {
    const response = await ApiCall.get('/messages');

    return response.data;
  } catch (e) {
    return e;
  }
}

async function apiPost(payload) {
  try {
    const response = await ApiCall.post('/messages', payload);

    return response.data;
  } catch (e) {
    return e;
  }
}

function* getMessages() {
  try {
    const response = yield call(apiGet);

    yield put({
      type: 'SUCCESS_MESSAGES',
      payload: response
    });
  } catch (err) {
    yield put({ type: 'FAILURE_MESSAGES', errorMessages: err });
  }
}

function* postMessage({ message }) {
  try {
    yield call(apiPost, message);

    yield put({
      type: 'SUCCESS_MESSAGE',
      message: message
    });
  } catch (err) {
    yield put({ type: 'FAILURE_MESSAGE', errorMessage: err });
  }
}

export default function* watcherMessages() {
  yield takeLatest('REQUEST_MESSAGES', getMessages),
    yield takeLatest('POST_MESSAGE', postMessage);
}
