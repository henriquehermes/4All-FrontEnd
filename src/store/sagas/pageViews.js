import { takeLatest, put, call } from 'redux-saga/effects';
import ApiCall from '../../config/api';
import 'regenerator-runtime/runtime';

async function apiGet() {
  try {
    const response = await ApiCall.get('/pageViews');

    return response.data;
  } catch (e) {
    throw e;
  }
}

export function* getPageViews() {
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
  yield takeLatest('GET_PAGE_VIEWS', getPageViews);
}

/**
 * takeLatest só deixará ser executado a função quando ela receber um retorno, evitando filas de request trancados.
 *
 * As funções aqui são todas executadas assincronas
 */
