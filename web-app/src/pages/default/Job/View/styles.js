import styled from "styled-components";

import { Paper as PaperMt, Button as ButtonMt } from "@material-ui/core";

export const Paper = styled(PaperMt)`
  margin-top: 20px;
  padding: 30px 42px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export const Button = styled(ButtonMt)``;
