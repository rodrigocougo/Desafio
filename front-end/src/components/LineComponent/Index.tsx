import React from 'react';
import { Content } from '../Content';
import {
  Box,
  Divider,
  SubTitleLine,
  TitleLine
} from './Styled';

interface LinetitleProps {
  labelSubTitle: string,
  labelTitle: string
}

export default function CBFLine(props: LinetitleProps) {
  return (
    <>
      <Content>
        <Box>
          <SubTitleLine>{props.labelSubTitle}</SubTitleLine>
          <TitleLine>{props.labelTitle}</TitleLine>
        </Box>
        <Divider />
      </Content>
    </>
  );
}
