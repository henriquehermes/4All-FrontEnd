/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';
import { LineLoader } from '../Loaders';
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
    const { data, loading } = this.props;

    return (
      <Row>
        <Col md='12' lg='6' xl='3'>
          <Body>
            <Header background='#30a5ff'>
              <IconOrder />
            </Header>
            <Content>
              {loading ? <LineLoader /> : <Title>{data.newOrders}</Title>}
              <SubTitle>New Orders</SubTitle>
            </Content>
          </Body>
        </Col>
        <Col md='12' lg='6' xl='3'>
          <Body>
            <Header background='#ffb53e'>
              <IconComment />
            </Header>
            <Content>
              {loading ? <LineLoader /> : <Title>{data.comments}</Title>}
              <SubTitle>Comments</SubTitle>
            </Content>
          </Body>
        </Col>
        <Col md='12' lg='6' xl='3'>
          <Body>
            <Header background='#1ebfae'>
              <IconUser />
            </Header>
            <Content>
              {loading ? <LineLoader /> : <Title>{data.newUsers}</Title>}
              <SubTitle>New Users</SubTitle>
            </Content>
          </Body>
        </Col>
        <Col md='12' lg='6' xl='3'>
          <Body>
            <Header background='#f9243f'>
              <IconPage />
            </Header>
            <Content>
              {loading ? <LineLoader /> : <Title>{data.pageViews}</Title>}
              <SubTitle>Page Views</SubTitle>
            </Content>
          </Body>
        </Col>
      </Row>
    );
  }
}

Widgets.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
