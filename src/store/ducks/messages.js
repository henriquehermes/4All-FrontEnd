const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
const SUCCESS_MESSAGES = 'SUCCESS_MESSAGES';
const FAILURE_MESSAGES = 'FAILURE_MESSAGES';

export function requestMessages() {
  return {
    type: REQUEST_MESSAGES
  };
}

export function successMessages() {
  return {
    type: SUCCESS_MESSAGES,
    payloa
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
  errorMessages: null,
  payload: []
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

    default:
      return state;
  }
}
