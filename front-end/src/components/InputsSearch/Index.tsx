import { useEffect, useState } from 'react'
import { BoxIcon, InputStyled, MdOutlineSearchStyled, Wrapper } from './styled'

export default function CBFInputSearch(props: {
  placeholder?: string;
  onChange: any;
  onClick: any;
  onKeyPress: any;
  clearSearch?: any;
}) {
  const [value, setValue] = useState('')

  useEffect(() => {    
    setValue('')
  }, [props.clearSearch])

  return (
    <>
      <Wrapper>
        <BoxIcon>
          <InputStyled
            placeholder={props.placeholder}
            onChange={(e: any) => {
              props.onChange(e)
              setValue(e.target.value)
            }}
            onKeyPress={props.onKeyPress}
            autoFocus={true} 
            value={value}
          />
          
          <MdOutlineSearchStyled onClick={() => props.onClick()} />
        </BoxIcon>
      </Wrapper>
    </>
  );
}
