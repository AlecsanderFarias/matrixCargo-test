import React from "react";

import {
  Table as TableMt,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import RowButton from "./RowButton";

const row = (data) => {
  const showAddress = () => {
    const { remote, address } = data;

    if (remote) {
      return "Remoto";
    }

    if (address.country && address.state) {
      return `${address.country},${address.state},${address.complement}`;
    }

    return "Sem endereço.";
  };

  return (
    <TableRow key={data._id}>
      <TableCell component="th" scope="row">
        {data.name}
      </TableCell>
      <TableCell align="left">{data.description || "Sem Descrição."}</TableCell>
      <TableCell align="right">{showAddress()}</TableCell>
      <TableCell align="right">
        {data.active ? "Ativada" : "Desativada"}
      </TableCell>

      <TableCell align="right">
        <RowButton data={data} />
      </TableCell>
    </TableRow>
  );
};

function Table({ data }) {
  return (
    <TableContainer component={Paper} style={{ marginTop: 10 }}>
      <TableMt aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome da vaga</TableCell>
            <TableCell align="left">Descrição</TableCell>
            <TableCell align="right">Endereço</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{data.map((item) => row(item))}</TableBody>
      </TableMt>
    </TableContainer>
  );
}

export default Table;
