import React from "react";

import { Pagination, InsidePageHeader, Loading } from "~/components";
import api from "~/services/api";

import { Container, LoadingContainer } from "./styles";
import Table from "./Table";

function List({ match }) {
  const { page } = match.params;
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

  React.useEffect(() => {
    getData(page || 1);
  }, [pagination.perPage]);

  return (
    <Container>
      <InsidePageHeader
        title="Vagas de emprego"
        description="Listagem de todas as vagas de emprego cadastradas"
      />

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
