const REQUEST_WIDGETS = 'REQUEST_WIDGETS';
const SUCCESS_WIDGETS = 'SUCCESS_WIDGETS';
const FAILURE_WIDGETS = 'FAILURE_WIDGETS';

export function requestWidgets() {
  return {
    type: REQUEST_WIDGETS
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
    case REQUEST_WIDGETS:
      return { ...state, loadingWidgets: true, errorWidgets: null };
    case SUCCESS_WIDGETS:
      return {
        ...state,
        payload: action.payload,
        loadingWidgets: false,
        errorWidgets: null
      };
    case FAILURE_WIDGETS:
      return {
        ...state,
        loadingWidgets: false,
        errorWidgets: action.errorWidgets
      };

    default:
      return state;
  }
}
