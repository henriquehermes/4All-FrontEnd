import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import {
  Body,
  Header,
  IconOrder,
  IconComment,
  IconUser,
  IconPage,
  Content,
  Title,
  SubTitle
} from './styles';

export default class Widgets extends Component {
  render() {
    const { data } = this.props;

    return (
      <Row>
        <Col md='12' lg='6' xl='3'>
          <Body>
            <Header background={'#30a5ff'}>
              <IconOrder />
            </Header>
            <Content>
              <Title>{data.newOrders}</Title>
              <SubTitle>New Orders</SubTitle>
            </Content>
          </Body>
        </Col>
        <Col md='12' lg='6' xl='3'>
          <Body>
            <Header background={'#ffb53e'}>
              <IconComment />
            </Header>
            <Content>
              <Title>{data.comments}</Title>
              <SubTitle>Comments</SubTitle>
            </Content>
          </Body>
        </Col>
        <Col md='12' lg='6' xl='3'>
          <Body>
            <Header background={'#1ebfae'}>
              <IconUser />
            </Header>
            <Content>
              <Title>{data.newUsers}</Title>
              <SubTitle>New Users</SubTitle>
            </Content>
          </Body>
        </Col>
        <Col md='12' lg='6' xl='3'>
          <Body>
            <Header background={'#f9243f'}>
              <IconPage />
            </Header>
            <Content>
              <Title>{data.pageViews}</Title>
              <SubTitle>Page Views</SubTitle>
            </Content>
          </Body>
        </Col>
      </Row>
    );
  }
}
