import {
  BoxNavStyled,
  NavStyled
} from './styled';

export default function CBFNavBar() {  
  return (
    <BoxNavStyled>
      <NavStyled className="ml-auto">
        <a>100% online</a>
      </NavStyled>
      <NavStyled className="ml-auto">
        <a>Certificados válidos em todo o Brasil</a>
      </NavStyled>
      <NavStyled className="ml-auto">
        <a>Atendimento</a>
      </NavStyled>
    </BoxNavStyled>
  );
}
