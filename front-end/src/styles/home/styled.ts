import { Col, Row, Spinner } from 'reactstrap'
import { Content } from 'src/components/Content'
import styled from 'styled-components'

export const Box = styled.div`
  justify-content: space-between;
  height: auto !important;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const SpinnerStyled = styled(Spinner)`
  width: 80px;
  height: 80px;
  color: #d73831;
`;

export const ContentProductListOffer = styled(Content)`
  @media (max-width: 1200px) {
    padding: 0 16px;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  @media(min-width: 860px) and (max-width: 992px) {
    padding: 16px;
    grid-template-columns: none;
    width: 100%;
  }
  
  @media(max-width: 768px) {
    grid-template-columns: none;
    width: 100%;
    max-width: 970px;
  }  
`;