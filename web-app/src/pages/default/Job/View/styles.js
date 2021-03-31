import styled from "styled-components";

import { Paper as PaperMt, Button } from "@material-ui/core";

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

export const Label = styled.h4`
  font-size: 22px;
  font-weight: 500;
`;

export const Value = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

export const ButtonBack = styled(Button)``;

export const ButtonDelete = styled(Button)``;

export const ButtonEdit = styled(Button)``;
