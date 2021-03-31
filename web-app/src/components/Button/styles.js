import { makeStyles } from "@material-ui/core";
import { darken } from "polished";

import colors from "../../styles/colors";

export default makeStyles(() => ({
  button: {
    margin: "0px 5px",
  },

  type1: {
    color: "#FFFFFF",
    background: colors.primary,
    "&:hover": {
      background: darken(0.08, colors.primary),
    },
  },

  type2: {
    color: "#FFFFFF",
    background: colors.secundary,
    "&:hover": {
      background: darken(0.08, colors.secundary),
    },
  },

  type3: {
    color: "#FFFFFF",
    background: colors.tertiary,
    "&:hover": {
      background: darken(0.08, colors.tertiary),
    },
  },
}));
