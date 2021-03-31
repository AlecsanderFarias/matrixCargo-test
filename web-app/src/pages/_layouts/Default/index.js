import React from "react";

import { Grid } from "@material-ui/core";

import { Container, Content } from "./styles";

function Default({ children }) {
  return (
    <Container style={{ width: "100%" }}>
      <Grid container spacing={0} direction="column">
        {/* <Grid item xs={12}>
          <Header />
        </Grid> */}
        <Grid item xs={12} style={{ flex: 1 }}>
          <Content>{children}</Content>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Default;
