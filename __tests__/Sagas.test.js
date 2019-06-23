import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { takeLatest } from 'redux-saga/effects';
import watcherWidgets, { getWidgets } from '../src/store/sagas/widgets';
import watcherPageViews, { getPageViews } from '../src/store/sagas/pageViews';
import watcherMessages, {
  getMessages,
  postMessage
} from '../src/store/sagas/messages';

Enzyme.configure({ adapter: new Adapter() });

describe('SAGAS', () => {
  it('should dispatch action "GET_WIDGETS" ', () => {
    const generator = watcherWidgets();

    expect(generator.next().value).toEqual(
      takeLatest('GET_WIDGETS', getWidgets)
    );
    expect(generator.next().done).toBe(true);
  });

  it('should dispatch action "GET_PAGE_VIEWS" ', () => {
    const generator = watcherPageViews();

    expect(generator.next().value).toEqual(
      takeLatest('GET_PAGE_VIEWS', getPageViews)
    );
    expect(generator.next().done).toBe(true);
  });

  it('should dispatch action "GET_MESSAGES" ', () => {
    const generator = watcherMessages();

    expect(generator.next().value).toEqual(
      takeLatest('GET_MESSAGES', getMessages)
    );
  });

  it('should dispatch action "POST_MESSAGE" ', () => {
    const generator = watcherMessages();

    expect(generator.next().value);
    expect(generator.next().value).toEqual(
      takeLatest('POST_MESSAGE', postMessage)
    );
  });
});
