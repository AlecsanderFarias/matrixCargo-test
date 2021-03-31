import React from "react";

import { Grid, Button } from "@material-ui/core";
import { Form } from "@unform/web";

import { InsidePageHeader } from "~/components";

import { Container, Paper } from "./styles";

function CreateEdit() {
  return (
    <Container>
      <InsidePageHeader
        title="Editar de emprego"
        description="Edite a vaga de emprego aqui"
      />
      <Paper>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              nome
            </Grid>
            <Grid item xs={12}>
              <Button>Salvar</Button>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Container>
  );
}

export default CreateEdit;
