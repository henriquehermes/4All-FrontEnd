import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Title } from './styles';

import Widgets from '../../components/Widgets';
import Chart from '../../components/Chart';

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
    const { widgets, pageViews, messages } = this.props;
    // console.log(pageViews.payload);
    return (
      <Container>
        <Title>Dashboard</Title>
        <Widgets data={widgets.payload} />
        <Chart data={pageViews.payload} />
      </Container>
    );
  }
}
