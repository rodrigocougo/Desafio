import React from "react";
import { ButtonStyled, SpinnerStyled } from "./styled";

export default function CBFButton({ ...props }): JSX.Element {
  return props.loading ? (
    <ButtonStyled {...props}>
      <>
        <SpinnerStyled primary={props.primary} /> &nbsp;
        {props.children}
      </>
    </ButtonStyled>
  ) : (
    <div>
      <ButtonStyled {...props} />
    </div>
  );
}
