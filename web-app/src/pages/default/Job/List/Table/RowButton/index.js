import React from "react";

import { Button } from "@material-ui/core";
import { VisibilityRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

// import { Container } from './styles';

function RowButton({ data }) {
  const history = useHistory();

  return (
    <Button onClick={() => history.push(`/edit/${data._id}`)}>
      <VisibilityRounded />
    </Button>
  );
}

export default RowButton;
