const GET_MESSAGES = 'GET_MESSAGES';
const SUCCESS_MESSAGES = 'SUCCESS_MESSAGES';
const FAILURE_MESSAGES = 'FAILURE_MESSAGES';

const POST_MESSAGE = 'POST_MESSAGE';
const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
const FAILURE_MESSAGE = 'FAILURE_MESSAGE';

/** */

export function postMessage(message) {
  return {
    type: POST_MESSAGE,
    message: message
  };
}

export function successMessage() {
  return {
    type: SUCCESS_MESSAGE,
    payload
  };
}

export function failureMessage() {
  return {
    type: FAILURE_MESSAGE,
    errorMessage
  };
}

/** */

export function requestMessages() {
  return {
    type: GET_MESSAGES
  };
}

export function successMessages() {
  return {
    type: SUCCESS_MESSAGES,
    payload
  };
}

export function failureMessages() {
  return {
    type: FAILURE_MESSAGES,
    errorMessages
  };
}

const initialState = {
  loadingMessages: false,
  loadingMessage: false,
  errorMessage: null,
  errorMessages: null,
  payload: [],
  message: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return Object.assign({}, state, {
        loadingMessages: true,
        errorMessages: null
      });
    case SUCCESS_MESSAGES:
      return Object.assign({}, state, {
        payload: action.payload,
        loadingMessages: false,
        errorMessages: null
      });
    case FAILURE_MESSAGES:
      return Object.assign({}, state, {
        loadingMessages: false,
        errorMessages: action.errorMessages
      });

    case POST_MESSAGE:
      return Object.assign({}, state, {
        payload: [
          ...state.payload,
          {
            userName: 'Eu',
            time: '1 min ago',
            message: action.message
          }
        ],

        /**
         * Adiciono na lista de mensagens a mensagem digitada pelo usuario, ao efetuar o metodo POST a API.
         */

        message: action.message,
        loadingMessage: true,
        errorMessage: null
      });
    case SUCCESS_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
        loadingMessage: false,
        errorMessage: null
      });
    case FAILURE_MESSAGE:
      return Object.assign({}, state, {
        loadingMessage: false,
        errorMessage: action.errorMessage
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
