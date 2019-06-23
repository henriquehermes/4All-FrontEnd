/* eslint-disable no-undef */
const GET_PAGE_VIEWS = 'GET_PAGE_VIEWS';
const SUCCESS_PAGE_VIEWS = 'SUCCESS_PAGE_VIEWS';
const FAILURE_PAGE_VIEWS = 'FAILURE_PAGE_VIEWS';

export function requestPageViews() {
  return {
    type: GET_PAGE_VIEWS
  };
}

export function successPageViewss() {
  return {
    type: SUCCESS_PAGE_VIEWS,
    payload
  };
}

export function failurePageViews() {
  return {
    type: FAILURE_PAGE_VIEWS,
    errorPageViews
  };
}

const initialState = {
  loadingPageViews: false,
  errorPageViews: null,
  payload: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAGE_VIEWS:
      return Object.assign({}, state, {
        loadingPageViews: true,
        errorPageViews: null
      });
    case SUCCESS_PAGE_VIEWS:
      return Object.assign({}, state, {
        payload: action.payload,
        loadingPageViews: false,
        errorPageViews: null
      });
    case FAILURE_PAGE_VIEWS:
      return Object.assign({}, state, {
        loadingPageViews: false,
        errorPageViews: action.errorPageViews
      });

    default:
      return state;
  }
}

/**
 * Utilizo sempre para as minhas request 3 tipos de Actions: REQUEST - SUCCESS - FAILURE,
 * -- Sendo cada uma controlando o estado da aplicação.
 * -- Loaders são mais facilmente implementados, evitando diversos setStates, deixando que o Redux controle a troca de variavel.
 * -- Caso deseja retornar um Alert em caso de Erro na request, já temos a variavel que contem o erro a ser mostrado.
 */

/**
 * PADRÕES:
 *
 * TYPE_NAME
 *
 * TYPE: GET - POST - PUT - DELETE - SUCCESS - FAILURE
 * NAME: Nome do assunto.
 *
 * SUCCESS - Sucesso da ação com a Api
 * FAILURE - Erro da ação com a Api
 *
 */
