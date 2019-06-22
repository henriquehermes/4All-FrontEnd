import styled from 'styled-components';
import { MdChatBubbleOutline } from 'react-icons/md';
import { Button, Input } from 'reactstrap';

export const Container = styled.div`
  background: white;
  border-radius: 4px;
  margin: 20px 0px 20px 0px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 20px 15px 20px;
  border-bottom-color: #eeeeee;
  border-bottom-style: solid;
  border-bottom-width: 2px;
`;

export const IconTitle = styled(MdChatBubbleOutline)`
  color: #5f6468;
  margin-right: 15px;
  width: 30px;
  height: 30px;
`;

export const Title = styled.h5`
  color: #5f6468;
`;

export const Body = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  border-top-color: #eeeeee;
  border-top-style: solid;
  border-top-width: 2px;
  padding: 10px;
`;

export const InputMessage = styled(Input).attrs({
  type: 'text',
  name: 'text',
  id: 'boxMessage',
  placeholder: 'Type your message here...'
})`
  border-color: #eeeeee !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
`;

export const ButtonSend = styled(Button)`
  background: #8ad919 !important;
  border-color: #8ad919 !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
`;

export const ButtonText = styled.span`
  color: #fff;
  font-weight: bold;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.displayPortraitLeft ? 'row-reverse' : 'row'};
  margin: 20px;
  border-bottom-color: #eeeeee;
  border-bottom-style: solid;
  border-bottom-width: ${props => (props.noBorder ? '0px' : '2px')};
`;

export const UserImage = styled.img.attrs(props => ({
  src: props.image
}))`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const MessageBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.span`
  color: #5f6468;
  font-weight: bold;
  margin-right: 10px;
`;

export const TimeUser = styled.span`
  color: #9fadbb;
  font-size: 12px;
`;

export const TextMessage = styled.span`
  color: #777777;
  font-size: 15px;
`;
