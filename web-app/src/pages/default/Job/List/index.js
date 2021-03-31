import React from 'react';

import { Pagination, InsidePageHeader, Loading } from '../../../../components';
import { Container, LoadingContainer } from './styles';
import Table from './Table';

function List() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    page: 1,
    perPage: 10,
    totalPages: 1,
  });

  async function getData(page) {
    try {
    } catch (error) {
      //handle (show ) error or default response
    }
  }

  React.useEffect(() => {
    getData(1);
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
        onChangePage={(page) => getData(page)}
        onChangeRowsPerPage={(e) =>
          setPagination({ ...pagination, perPage: e })
        }
      />
    </Container>
  );
}

export default List;
