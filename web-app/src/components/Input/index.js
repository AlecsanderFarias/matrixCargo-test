import React from "react";

import { TextField } from "unform-material-ui";

import useStyles from "./styles";

function Input({ ...rest }) {
  const classes = useStyles();

  return <TextField variant="outlined" className={classes.input} {...rest} />;
}

export default Input;
