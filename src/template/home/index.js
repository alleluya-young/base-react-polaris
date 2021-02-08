import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ProductItem } from "../common/ProductItem";

export const Home = () => {
  const history = useHistory();

  return (
    <div>
      <ProductItem
        onClick={() => {
          history.push("/detail");
        }}
      />
    </div>
  );
};
