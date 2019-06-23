import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { ChatLoader } from '../Loaders';
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
      inputValue: ''
    };
  }

  handleText(event) {
    let { inputValue } = this.state;

    inputValue = event.target.value;
    this.setState({
      inputValue: inputValue
    });
  }

  handlePost() {
    let { inputValue } = this.state;
    const { postMessage } = this.props;

    postMessage(inputValue);

    this.setState({ inputValue: '' });
  }

  render() {
    const { data, loading } = this.props;
    const { inputValue } = this.state;
    const LastPosition = data.length - 1;

    return (
      <Row>
        <Col lg='8'>
          <Container>
            <Header>
              <IconTitle />
              <Title>Chat</Title>
            </Header>
            <Body>
              {loading ? (
                <ChatLoader />
              ) : (
                data.map((item, index) => (
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
                ))
              )}
            </Body>
            <Footer>
              <InputMessage
                ref={input => (this.textInput = input)}
                onChange={this.handleText.bind(this)}
                value={inputValue}
              />
              <ButtonSend
                onClick={() => this.handlePost()}
                disabled={Boolean(!inputValue)}
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
