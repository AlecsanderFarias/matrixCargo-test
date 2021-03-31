import React from "react";

import { Grid, Typography } from "@material-ui/core";
// import { Container } from './styles';

function InsidePageHeader({
  title = "",
  description = "",
  sideComponents = [],
}) {
  return (
    <Grid container spacing={2} style={{ width: "100%", margin: 0 }}>
      <Grid item xs={12} md>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4">{title}</Typography>
          </Grid>

          {description && (
            <Grid item xs={12}>
              <Typography variant="subtitle1">{description}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} md>
        <Grid container spacing={2} alignItems="center" justify="flex-end">
          {sideComponents.map((item) => item)}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default InsidePageHeader;
