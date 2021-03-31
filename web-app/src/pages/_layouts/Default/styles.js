import styled from 'styled-components';

import { Container as ContainerMt } from '@material-ui/core';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled(ContainerMt).attrs({
  maxWidth: 'lg',
})``;
