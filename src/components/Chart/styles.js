import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  overflow: hidden;

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const Header = styled.div`
  padding: 15px 20px 15px 20px;
  border-bottom-color: #eeeeee;
  border-bottom-style: solid;
  border-bottom-width: 2px;
`;

export const Title = styled.h5`
  color: #5f6468;
`;

export const Body = styled.div`
  padding: 25px 25px 25px 0px;
`;
