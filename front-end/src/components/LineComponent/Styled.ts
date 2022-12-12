import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: left;
  align-text: left;
  align-self: left;
  justify-content: left;  
  padding-top: 50px;
  padding-bottom: 10px;
  
  @media(max-width: 1200px) {
    padding: 16px;
  }
`;

export const SubTitleLine = styled.p`
  font-style: normal;
  font-size: 14px;
  color: red;
  font-weight: 100;
  mix-blend-mode: normal;  
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const TitleLine = styled.p`
  font-style: normal;
  font-size: 28px;
  color: black;
  font-weight: 700;
  mix-blend-mode: normal;
  margin-block: auto;
  text-align: left;
  margin-top: -15px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: #d73831;
  margin-bottom: 20px;
`;