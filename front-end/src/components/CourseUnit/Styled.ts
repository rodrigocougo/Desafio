import styled from 'styled-components';
import CBFCard from '../General/Cardcomponent/Card';

export const Box = styled(CBFCard)`
  display: ${(props) => (props.horizontal ? 'flex' : '')};
  flex-direction: ${(props) => (props.horizontal ? 'row' : '')};
  max-width: ${(props) => (props.horizontal ? '353px' : '293px')};
  margin-right: 20px;
  height: ${(props) => (props.horizontal ? '108px' : 'auto')};
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  background: #fafafa;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    box-shadow: 0 0px 10px -2px;
  }
`;

export const BoxItem = styled.div`
  border-radius: 5px;
  background: radial-gradient(
    55.64% 1034.7% at 50% 50%,
    #d73831 0%,
    #952823 100%
  );
  width: 100%; /* 213px; */
  height: 250px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;

export const LabelNameCourse = styled.div`
  width: 100%;
  color: white;
  text-align: left;
  padding: 5px 0px 0px 10px;
  line-height: 1em;
`;

export const LabelCategorie = styled.div`
width: 100%;
color: white;
text-align: right;
padding: 5px; 
margin-right: 5px;
margin-top: 3px;
line-height: 1em;
text-transform: uppercase;
text-align: center;
font-size: 10px;
border: 1px solid silver;
border-radius: 5px;
`;
