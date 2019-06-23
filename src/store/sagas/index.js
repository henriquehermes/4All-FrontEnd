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

/**
 * A função rootSaga fica observando os disparos das Actions e assim que escuta algum
 * executa a respectiva ação, por padrão escrevo o import com 'watcherXXXX',
 * para uma melhor compreensão do que isso se trata.
 */
