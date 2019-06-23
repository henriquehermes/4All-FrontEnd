/* eslint-disable no-undef */
const GET_WIDGETS = 'GET_WIDGETS';
const SUCCESS_WIDGETS = 'SUCCESS_WIDGETS';
const FAILURE_WIDGETS = 'FAILURE_WIDGETS';

export function requestWidgets() {
  return {
    type: GET_WIDGETS
  };
}

export function successWidgets() {
  return {
    type: SUCCESS_WIDGETS,
    payload
  };
}

export function failureWidgets() {
  return {
    type: FAILURE_WIDGETS,
    errorWidgets
  };
}

const initialState = {
  loadingWidgets: false,
  errorWidgets: null,
  payload: {
    newOrders: 0,
    comments: 0,
    newUsers: 0,
    pageViews: 0
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WIDGETS:
      return Object.assign({}, state, {
        loadingWidgets: true,
        errorWidgets: null
      });
    case SUCCESS_WIDGETS:
      return Object.assign({}, state, {
        payload: action.payload,
        loadingWidgets: false,
        errorWidgets: null
      });
    case FAILURE_WIDGETS:
      return Object.assign({}, state, {
        loadingWidgets: false,
        errorWidgets: action.errorWidgets
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
