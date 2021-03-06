/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      inputValue
    });
  }

  handlePost() {
    const { inputValue } = this.state;
    // eslint-disable-next-line react/prop-types
    const { postMessage } = this.props;

    postMessage(inputValue);
    /**
     * Dispara a Action com o texto do Input
     */

    this.setState({ inputValue: '' });
    /**
     * Limpa campo do input
     */
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
                    noBorder={index === LastPosition}
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

Chat.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

/**
 * Botão Send so fica disponivel quando há algum texto no input
 */
