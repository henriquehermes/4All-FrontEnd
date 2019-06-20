import React, { Component } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

import { Container, Header, Title, Body } from './styles';

export default class Chart extends Component {
  render() {
    const { data } = this.props;

    return (
      <Container>
        <Header>
          <Title>Site Traffic Overview</Title>
        </Header>
        <Body>
          <ResponsiveContainer width='100%' height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#30a4ff' stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray={''} />
              <XAxis dataKey='month' />
              <YAxis dataKey='views' />
              <Tooltip />
              <Area
                dot={true}
                activeDot={{ r: 8 }}
                type='monotone'
                dataKey='views'
                strokeWidth={3}
                stroke='#30a4ff'
                fill='url(#colorUv)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </Body>
      </Container>
    );
  }
}
