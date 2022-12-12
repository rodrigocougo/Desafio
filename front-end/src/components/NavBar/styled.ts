import { Navbar } from 'react-bootstrap'
import { Collapse } from 'reactstrap'
import styled from 'styled-components'
import { Wrapper } from 'src/components/Wrapper'
import Image from 'next/image'
import { BsChevronRight } from 'react-icons/bs'
import CBFButton from 'src/components/General/button'

export const WrapperStyledNavBar = styled(Wrapper)`
  background-color: #f9f8f7 !important;
  height: auto;
  @media (max-width: 768px) {    
    display: none;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  border-style: none !important;
  @media (min-width: 1254px) {
   max-width: 1254px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  background-color: #ba261f !important;
  flex-direction: column;

  @media (max-width: 768px) {
   background-color: white;
   box-shadow: -4px 2px 9px 1px #00000012;
  }
`;

export const InnerHeader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  
  @media (min-width: 1254px) {
    max-width: 1254px;    
  }
  
  @media(max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ContainerStyled = styled.div`
  width: 100%;
`;

export const NavBarStyled = styled(Navbar)`
  padding: 0 !important;
`;

export const BoxImgStyled = styled.div`
  display: flex;
  width: auto;
  height: 45px;
  text-align: auto;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 250px;
  margin-top:-32px;
  height: 108px;
  margin-left:-15px;
  cursor: pointer;
  @media screen and (min-width: 320px) and (max-width: 667px) {
    margin: auto;
  }
`;

export const DivSearch = styled(Collapse)`
  padding: 0 16px;
  justify-content: end;
`;

export const DivButtonAccessSignin = styled(Collapse)`
  padding: 0 16px;
  justify-content: end;
`;

export const TextAccessSignin = styled.div`
  margin-top: -16px;
  text-decoration: none !important;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: white;
  text-align: left !important;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;

  &:hover {
    color: white;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  width: auto;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;  
  text-decoration: none !important;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BsChevronRightStyled = styled(BsChevronRight)`
  display: flex;
  width: 15px;
  height: 18px;
  margin-right: 4px;
`;

export const ButtonStyled = styled(CBFButton)`
  display: flex;
  width: auto;
  height: 48px;
  background: #a02924 !important;
  border-radius: 55px !important;
  border-style: none;
  align-items: center;
  place-content: center;
  box-shadow: none !important;
  margin: auto 0 !important;
  cursor: pointer;
  text-decoration: none !important;

  &:hover {
    background-color: #c1423d !important;
  }
`;