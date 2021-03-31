import React from 'react';

import { Pagination, InsidePageHeader } from '../../../../components';
import { Container, LoadingContainer } from './styles';
import Table from './Table';

function List() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    page: 1,
    perPage: 1,
  });

  async function getData(page) {
    try {
      //get data from server
    } catch (error) {
      //handle (show ) error or default response
    }
  }

  React.useEffect(() => {
    getData(1);
  }, []);

  return (
    <Container>
      <InsidePageHeader name="Vagas de emprego" />

      {loading ? <LoadingContainer /> : <Table data={data} />}

      <Pagination pagination={pagination} onChange={(page) => getData(page)} />
    </Container>
  );
}

export default List;
