import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';
import Input from '../General/input';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 108px;
  flex-direction: column;
  align-self: flex-end;

  @media (max-width: 280px) {
    max-width: 265px;
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 45px;
  align-items: center;
  margin: auto;
  border-style: none;
  background-color: white;
  max-width: 800px;

  @media (max-width: 1200px) {
    max-width: 600px;
  }
`;
export const InputStyled = styled(Input)`
  display: flex;
  width: 100%;
  height: 40px;
  border-style: none;
  margin-left: 20px;
  min-width: 540px;

  @media (max-width: 1200px) {
    min-width: 350px;
  }

  @media (max-width: 992px) {
    min-width: 200px;
  }

  @media (max-width: 840px) {
    min-width: 140px;
  }

  @media (max-width: 280px) {
    min-width: 175px;
  }
`;

export const MdOutlineSearchStyled = styled(MdOutlineSearch)`
  margin-top: 4px;
  margin-left: 5px;
  margin-right: 15px;
  min-width: 40px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
