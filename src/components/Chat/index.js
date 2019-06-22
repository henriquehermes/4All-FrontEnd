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
  constructor(props) {
    super(props);
    this.state = {
      userMessage: {
        userName: 'Eu',
        message: undefined,
        time: '1 min ago'
      }
    };
  }

  handleText(event) {
    let { userMessage } = this.state;

    userMessage.message = event.target.value;
    this.setState({
      userMessage: userMessage
    });
  }

  handlePost() {
    let { userMessage } = this.state;
    const { postMessage } = this.props;

    postMessage(userMessage);
    userMessage.message = undefined;

    this.setState({
      userMessage: userMessage
    });
  }

  render() {
    const { data } = this.props;
    const { userMessage } = this.state;
    const LastPosition = data.length - 1;

    console.log(userMessage);

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
                  <UserImage
                    image={item.portrait}
                    displayPortraitLeft={item.displayPortraitLeft}
                  />
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
              <InputMessage
                onChange={this.handleText.bind(this)}
                value={userMessage.message}
              />
              <ButtonSend
                onClick={() => this.handlePost()}
                disabled={Boolean(!userMessage.message)}
              >
                <ButtonText>Send</ButtonText>
              </ButtonSend>
            </Footer>
          </Container>
        </Col>
      </Row>
    );
  }
}
