/* eslint-disable react/button-has-type */
import React from "react";

import { Grid, FormControlLabel, Switch } from "@material-ui/core";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { InsidePageHeader, Input, Loading } from "~/components";
import api from "~/services/api";
import validator from "./validator";

import { Container, Paper, Button, LoadingContainer } from "./styles";

function CreateEdit({ match }) {
  const { id } = match.params;
  const history = useHistory();
  const formRef = React.useRef();

  const [remote, setRemote] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [loadingGet, setLoadingGet] = React.useState(false);
  const [data, setData] = React.useState(null);

  async function onSubmit(formData) {
    try {
      setLoading(true);

      await validator({ ...formData, remote });

      await api.put(`/job/${id}`, { ...formData, remote, active });

      toast.success("Vaga alterada com sucesso.");

      history.push("/");

      setLoading(false);
    } catch (error) {
      const validationErrors = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((t) => {
          validationErrors[t.path] = t.message;
        });

        formRef.current.setErrors(validationErrors);
      } else {
        toast.error(
          error?.response?.data?.error ||
            "Ocorreu algum erro, tente novamente mais tarde."
        );
      }

      setLoading(false);
    }
  }

  async function getData() {
    try {
      setLoadingGet(true);

      const response = await api.get(`/job/${id}`);

      const { active: preActive, remote: preRemote, ...rest } = response.data;

      console.log(preActive);

      setData(rest);
      setRemote(preRemote);
      setActive(preActive);

      setLoadingGet(false);
    } catch (error) {
      toast.error(
        error?.response?.data?.error ||
          "Ocorreu algum erro, tente novamente mais tarde."
      );

      setLoadingGet(false);
      history.push("/");
    }
  }

  React.useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  return loadingGet ? (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  ) : (
    <Container>
      <InsidePageHeader
        title="Editar de emprego"
        description="Edite a vaga de emprego aqui"
      />
      <Paper>
        <Form ref={formRef} initialData={data} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input name="name" label="Nome" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input name="description" label="Descrição" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={remote}
                    onChange={(e) => setRemote(e.target.checked)}
                    name="checkedA"
                  />
                }
                label="Remoto"
                labelPlacement="start"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                    name="checkedA"
                  />
                }
                label="Ativa"
                labelPlacement="start"
              />
            </Grid>

            {!remote && (
              <>
                <Grid item xs={12} sm={6}>
                  <Input name="address.country" label="Pais" />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Input name="address.state" label="Estado" />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Input name="address.complement" label="Endereço" />
                </Grid>
              </>
            )}

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              {loading ? (
                <Loading size={20} />
              ) : (
                <Button onClick={() => formRef.current.submitForm()}>
                  Salvar
                </Button>
              )}
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Container>
  );
}

export default CreateEdit;
