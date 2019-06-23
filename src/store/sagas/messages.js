/* eslint-disable no-unused-expressions */

import { takeLatest, put, call } from 'redux-saga/effects';
import ApiCall from '../../config/api';

async function apiGet() {
  try {
    const response = await ApiCall.get('/messages');

    return response.data;
  } catch (e) {
    throw e;
  }
}

async function apiPost(payload) {
  try {
    const response = await ApiCall.post('/messages', payload);

    return response.data;
  } catch (e) {
    throw e;
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
      message
    });
  } catch (err) {
    yield put({ type: 'FAILURE_MESSAGE', errorMessage: err });
  }
}

export default function* watcherMessages() {
  yield takeLatest('GET_MESSAGES', getMessages),
    yield takeLatest('POST_MESSAGE', postMessage);
}

/**
 * takeLatest só deixará ser executado a função quando ela receber um retorno, evitando filas de request trancados.
 *
 * As funções aqui são todas executadas assincronas
 */
