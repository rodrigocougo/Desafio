import Link from 'next/link';
import { useEffect, useState } from 'react';
import CBFNavBar from 'src/components/Bar';
import SearchBox from './SearchBox';
import {
  NavBarStyled, 
  ContainerStyled, 
  WrapperStyledNavBar,
  DivSearch,
  Header,
  InnerHeader,
  InnerWrapper,
  BoxImgStyled,
  Img,
  TextAccessSignin,
  DivButtonAccessSignin,
  BoxButton,
  BsChevronRightStyled,
  ButtonStyled
} from './styled';
import { LABEL_ACCESS_REGISTER, URL_LOGO } from 'src/common/global';


const BSHeader = () => {
  const [width, setWidth] = useState<number>(0);  

  useEffect(() => {
    function handleResize() {      
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <NavBarStyled color="light" expand="md" light>
      <ContainerStyled>
        <WrapperStyledNavBar>
          <InnerWrapper>            
            {CBFNavBar()}
          </InnerWrapper>
        </WrapperStyledNavBar>
        <Header>
          <InnerHeader>
            <BoxImgStyled>
              <Link href="/" passHref>
                <Img src={URL_LOGO} alt="Logo Curso Beta Fake" />                
              </Link>
            </BoxImgStyled>
            <DivSearch navbar={width !== 768} >
              <SearchBox />
            </DivSearch>   
            <DivButtonAccessSignin navbar={width !== 768}>
              <BoxButton>
                <Link href="/cadastro" passHref>
                  <ButtonStyled primary>
                    <TextAccessSignin>{LABEL_ACCESS_REGISTER}</TextAccessSignin>
                    <BsChevronRightStyled />
                  </ButtonStyled>
                </Link>
              </BoxButton>
            </DivButtonAccessSignin>
          </InnerHeader>
        </Header>
      </ContainerStyled>
    </NavBarStyled>
  );
}

export default BSHeader;
