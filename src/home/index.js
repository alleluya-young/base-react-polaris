import React from "react";
import { useConfig } from "../core/config";
import { Button } from "@shopify/polaris";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const config = useConfig();
  const history = useHistory();
  console.log("@@@@@@@@@@@@", config);
  return (
    <div>
      Home
      <Button
        onClick={() => {
          history.push("/detail");
        }}
      >
        To Detail
      </Button>
    </div>
  );
};
