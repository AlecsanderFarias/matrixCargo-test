import React from "react";
import { Button as ButtonMt } from "@material-ui/core";
import clsx from "clsx";

import Loading from "../Loading";
import useStyles from "./styles";

function Button({ children, loading, customType = 0, ...rest }) {
  const classes = useStyles();

  const types = [classes.type1, classes.type2, classes.type3];

  return (
    <ButtonMt {...rest} className={clsx(classes.button, types[customType])}>
      {loading ? <Loading size={20} /> : children}
    </ButtonMt>
  );
}

export default Button;
