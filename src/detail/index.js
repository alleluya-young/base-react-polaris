import React from "react";
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core'

export const Detail = () => {
  const history = useHistory();
  return (
    <div>
      detail
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </Button>
        详情
    </div>
  );
};
