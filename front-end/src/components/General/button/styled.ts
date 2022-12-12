import { Button, Spinner } from 'reactstrap'
import styled from 'styled-components'

const primary = '#d73831';
const secondary = '#ffffff';

// display: ${(props) => (props.horizontal ? "flex" : "")};

export const ButtonStyled = styled(Button)`
  display: flex;
  border-radius: 15px;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 16px;
  background-color: ${(props) => (props.primary ? primary : secondary)};
  box-shadow: none !important;
  border: 0px;

  &:hover {
    background-color: ${(props) => (props.primary ? '#c1423d !important' : '#f06a64  !important')};
    border-color: ${(props) => (props.primary ? '#c1423d !important' : '#f06a64  !important')};

    &:first-child, p, svg {
      color: white !important;
    }
  }
  &:focus {
    background: ${(props) => (props.primary ? primary : secondary)};
  }
  &:blur {
    background: ${(props) => (props.primary ? secondary : primary)};
  }

  @media(max-width: 768px){
    width: 100%;
    justify-content: center;
  }
`;

export const SpinnerStyled = styled(Spinner)`
  width: 14px;
  height: 14px;
  color: ${(props) => (props.primary ? secondary : primary)};
`;
