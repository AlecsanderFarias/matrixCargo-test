import React from "react";
import { TablePagination } from "@material-ui/core";
import { Container } from "./styles";

function Pagination({ pagination, onChangePage, onChangeRowsPerPage }) {
  return (
    <Container>
      <TablePagination
        component="div"
        count={pagination.totalPage || 1}
        page={pagination.page || 1}
        onChangePage={(event, newPage) => onChangePage(newPage)}
        rowsPerPage={pagination.perPage || 10}
        onChangeRowsPerPage={(event) =>
          onChangeRowsPerPage(event?.target?.value || 10)
        }
      />
    </Container>
  );
}

export default Pagination;
