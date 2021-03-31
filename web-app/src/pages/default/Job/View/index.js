import React from "react";

import { Paper } from "@material-ui/core";

import { Loading, InsidePageHeader } from "~/components";

import { Container, LoadingContainer } from "./styles";

function View() {
  const [loading, setLoading] = React.useState(false);

  return loading ? (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  ) : (
    <Container>
      <InsidePageHeader
        title="Editar de emprego"
        description="Edite a vaga de emprego aqui"
      />
      <Paper />
    </Container>
  );
}

export default View;
