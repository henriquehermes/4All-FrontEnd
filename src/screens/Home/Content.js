import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';
import { Title } from './styles';

import Widgets from '../../components/Widgets';
import Chart from '../../components/Chart';
import Chat from '../../components/Chat';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { requestWidgets, requestPageViews, requestMessages } = this.props;
    requestWidgets();
    requestPageViews();
    requestMessages();
  }

  render() {
    const { widgets, pageViews, messages, postMessage } = this.props;

    return (
      <Container>
        <Title>Dashboard</Title>
        <Widgets data={widgets.payload} loading={widgets.loadingWidgets} />
        <Chart data={pageViews.payload} loading={pageViews.loadingPageViews} />
        <Chat
          data={messages.payload}
          postMessage={event => postMessage(event)}
          loading={messages.loadingMessages}
        />
      </Container>
    );
  }
}

Home.defaultProps = {
  postMessage
};

Home.propTypes = {
  widgets: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  pageViews: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  messages: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  requestWidgets: PropTypes.func, // eslint-disable-line react/require-default-props
  requestPageViews: PropTypes.func, // eslint-disable-line react/require-default-props
  requestMessages: PropTypes.func, // eslint-disable-line react/require-default-props
  postMessage: PropTypes.func
};

/**
 * Os request são executados assíncronamente
 */

/**
 * Decidi passar via Props o metodo postMessage pois, evitaria redundancia no arquivo Chat
 * sendo que já tenho este metodo disponivel neste arquivo.
 *
 * event: Recebe o texto escrito no input.
 */
