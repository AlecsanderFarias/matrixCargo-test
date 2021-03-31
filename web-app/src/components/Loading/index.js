import React from "react";

import { CircularProgress } from "@material-ui/core";

// import { Container } from './styles';

function Loading({ size = 50 }) {
  return <CircularProgress size={size} />;
}

export default Loading;
