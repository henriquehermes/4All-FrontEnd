import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {
  Container,
  Header,
  IconTitle,
  Title,
  Body,
  Footer,
  InputMessage,
  ButtonSend,
  ButtonText,
  Cell,
  UserImage,
  MessageBox,
  TextBox,
  UserName,
  TimeUser,
  TextMessage
} from './styles';

export default class Chat extends Component {
  render() {
    const { data } = this.props;
    const LastPosition = data.length - 1;
    console.log(data, LastPosition);

    return (
      <Row>
        <Col lg='8'>
          <Container>
            <Header>
              <IconTitle />
              <Title>Chat</Title>
            </Header>
            <Body>
              {data.map((item, index) => (
                <Cell
                  key={Math.random()}
                  noBorder={index === LastPosition ? true : false}
                  displayPortraitLeft={item.displayPortraitLeft}
                >
                  <UserImage image={item.portrait} />
                  <MessageBox>
                    <TextBox>
                      <UserName>{item.userName}</UserName>
                      <TimeUser>{item.time}</TimeUser>
                    </TextBox>
                    <TextMessage>{item.message}</TextMessage>
                  </MessageBox>
                </Cell>
              ))}
            </Body>
            <Footer>
              <InputMessage />
              <ButtonSend>
                <ButtonText>Send</ButtonText>
              </ButtonSend>
            </Footer>
          </Container>
        </Col>
      </Row>
    );
  }
}
