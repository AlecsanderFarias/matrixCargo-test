import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Pagination, InsidePageHeader, Loading, Button } from "~/components";
import api from "~/services/api";

import { Container, LoadingContainer, HeaderContainer } from "./styles";
import Table from "./Table";

function List({ match }) {
  const { page } = match.params;
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    page: 1,
    perPage: 10,
    totalPages: 1,
  });

  async function getData(getPage) {
    try {
      setLoading(true);

      const response = await api.get("/job", {
        page: getPage || 1,
        perPage: pagination.perPage,
      });

      setData(response.data.data);
      setPagination({
        ...pagination,
        totalPages: response.data.totalPages,
        page: response.data.page,
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      // handle (show ) error or default response
    }
  }

  const createButton = () => {
    return (
      <Grid xs={12} md={3}>
        <Button fullWidth onClick={() => history.push("/create")}>
          Adicionar vaga
        </Button>
      </Grid>
    );
  };

  React.useEffect(() => {
    getData(page || 1);
  }, [pagination.perPage]);

  return (
    <Container>
      <HeaderContainer>
        <InsidePageHeader
          title="Vagas de emprego"
          description="Listagem de todas as vagas de emprego cadastradas"
          sideComponents={[createButton()]}
        />
      </HeaderContainer>

      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <Table data={data} />
      )}

      <Pagination
        pagination={pagination}
        onChangePage={(newPage) => getData(newPage)}
        onChangeRowsPerPage={(e) =>
          setPagination({ ...pagination, perPage: e })
        }
      />
    </Container>
  );
}

export default List;
