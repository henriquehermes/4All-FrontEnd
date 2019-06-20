const REQUEST_PAGE_VIEWS = 'REQUEST_PAGE_VIEWS';
const SUCCESS_PAGE_VIEWS = 'SUCCESS_PAGE_VIEWS';
const FAILURE_PAGE_VIEWS = 'FAILURE_PAGE_VIEWS';

export function requestPageViews() {
  return {
    type: REQUEST_PAGE_VIEWS
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
    case REQUEST_PAGE_VIEWS:
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
