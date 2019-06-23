import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/screens/Home/Content';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing App Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <App
        widgets={{
          loadingWidgets: false,
          errorWidgets: null,
          payload: {
            newOrders: 0,
            comments: 0,
            newUsers: 0,
            pageViews: 0
          }
        }}
        pageViews={{
          loadingPageViews: false,
          errorPageViews: null,
          payload: []
        }}
        messages={{
          loadingMessages: false,
          loadingMessage: false,
          errorMessage: null,
          errorMessages: null,
          payload: [],
          message: {}
        }}
        postMessage={() => {}}
        requestWidgets={() => {}}
        requestPageViews={() => {}}
        requestMessages={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
