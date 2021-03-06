import styled from 'styled-components';
import {
  MdShoppingBasket,
  MdChatBubbleOutline,
  MdPersonOutline,
  MdLineStyle
} from 'react-icons/md';

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1439px) {
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: ${props => props.background};

  /* Recebo via Props a cor do background, evitando criar diversas Divs apenas para mudar a cor do Background */

  flex: 0.4;

  @media (min-width: 425px) and (max-width: 990px) {
    flex: 0.15;
  }

  @media (min-width: 991px) and (max-width: 1199px) {
    flex: 0.2;
  }
`;

export const IconOrder = styled(MdShoppingBasket)`
  color: #fff;
  width: 40px;
  height: 40px;
`;

export const IconComment = styled(MdChatBubbleOutline)`
  color: #fff;
  width: 40px;
  height: 40px;
`;

export const IconUser = styled(MdPersonOutline)`
  color: #fff;
  width: 40px;
  height: 40px;
`;

export const IconPage = styled(MdLineStyle)`
  color: #fff;
  width: 40px;
  height: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px 20px 15px;
  justify-content: center;
  align-items: flex-start;
  line-height: 18px;
  background: white;
  flex: 0.6;

  @media (max-width: 767px) {
    align-items: center;
  }

  @media (min-width: 425px) and (max-width: 1200px) {
    flex: 0.85;
  }
`;

export const Title = styled.span`
  color: #5f6468;
  font-size: 23px;
`;

export const SubTitle = styled.span`
  color: #9fadc9;
  font-weight: 400;
  font-size: 13px;
`;
