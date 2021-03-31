import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { toast } from "react-toastify";

import { Loading, InsidePageHeader, Button } from "~/components";
import api from "~/services/api";
import { Container, LoadingContainer, Paper, Label, Value } from "./styles";

function View({ match }) {
  const { id } = match.params;
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [loadingDelete, setLoadingDelete] = React.useState(false);
  const [data, setData] = React.useState(null);

  async function getData() {
    try {
      setLoading(true);

      const response = await api.get(`/job/${id}`);

      setData(response.data);

      setLoading(false);
    } catch (error) {
      toast.error(
        error?.response?.data?.error ||
          "Ocorreu algum erro, tente novamente mais tarde."
      );

      setLoading(false);
      history.push("/");
    }
  }

  React.useEffect(() => {
    if (id) {
      getData();
    } else {
      history.push("/");
    }
  }, []);

  const address = () => {
    if (data.remote) {
      return "Remoto";
    }

    if (data.address.country && data.address.state) {
      return `${data.address.country},${data.address.state},${
        data.address.complement || ""
      }`;
    }

    return "Sem endereço";
  };

  async function deleteJob() {
    try {
      setLoadingDelete(true);

      await api.delete(`/job/${id}`);

      toast.success("Vaga removida com sucesso.");

      history.push("/");

      setLoadingDelete(false);
    } catch (error) {
      toast.error(
        error?.response?.data?.error ||
          "Ocorreu algum erro, tente novamente mais tarde."
      );

      setLoadingDelete(false);
    }
  }

  return loading || !data ? (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  ) : (
    <Container>
      <InsidePageHeader
        title="Visualizar vaga de emprego"
        description="Veja os detalhes dessa vaga aqui."
      />
      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Label>
              Nome: <Value variant="body1">{data.name}</Value>
            </Label>
          </Grid>
          <Grid item xs={12} md={6}>
            <Label>
              Descrição: <Value variant="body1">{data.description}</Value>
            </Label>
          </Grid>

          <Grid item xs={12} md={6}>
            <Label>
              Endereço: <Value variant="body1"> {address()}</Value>
            </Label>
          </Grid>

          <Grid item xs={12} md={6}>
            <Label>
              Status:{" "}
              <Value variant="body1">
                {data.active ? "Ativa" : "Desativada"}
              </Value>
            </Label>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button onClick={() => history.push("/")} customType={1}>
              Voltar
            </Button>
            <Button
              loading={loadingDelete}
              onClick={() => deleteJob()}
              customType={2}
            >
              Excluir
            </Button>
            <Button onClick={() => history.push(`/edit/${data._id}`)}>
              Editar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default View;
