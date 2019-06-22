const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
const SUCCESS_MESSAGES = 'SUCCESS_MESSAGES';
const FAILURE_MESSAGES = 'FAILURE_MESSAGES';
/** */
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
    type: REQUEST_MESSAGES
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
    case REQUEST_MESSAGES:
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
