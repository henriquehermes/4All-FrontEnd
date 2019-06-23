import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as ACTIONS from '../src/store/ducks/widgets';

Enzyme.configure({ adapter: new Adapter() });

describe('action request widgets', () => {
  it('should create an action to get widgets', () => {
    const expectedAction = {
      type: 'GET_WIDGETS'
    };
    expect(ACTIONS.requestWidgets()).toEqual(expectedAction);
  });
});

describe('action success widgets', () => {
  it('should create an action to add payload list', () => {
    const payload = {
      newOrders: 0,
      comments: 0,
      newUsers: 0,
      pageViews: 0
    };
    const expectedAction = {
      type: 'SUCCESS_WIDGETS',
      payload
    };
    expect(ACTIONS.successWidgets(payload)).toEqual(expectedAction);
  });
});

describe('action failure widgets', () => {
  it('should create an action to failure widgets request', () => {
    const errorWidgets = '';
    const expectedAction = {
      type: 'FAILURE_WIDGETS',
      errorWidgets
    };
    expect(ACTIONS.failureWidgets(errorWidgets)).toEqual(expectedAction);
  });
});
