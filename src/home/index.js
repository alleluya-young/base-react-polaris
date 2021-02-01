import React, { useEffect } from "react";
import { useConfig } from "../core/config";
import { Button } from "@shopify/polaris";
import { useHistory } from "react-router-dom";
import { useRequest } from "../core/request";

export const Home = () => {
  const config = useConfig();
  const history = useHistory();
  const [data, run, loading, error] = useRequest(
    "https://srv-bff-park-home--hechuan.rockontrol.com:40443/bff-park-home/v0/visitor/investment/policy?offset=0&size=10"
  );

  console.log("@@@@@@@@@@@@", config);
  console.log("@@@@@@@@@@@@###", data, loading, error);

  return (
    <div>
      Home
      <Button
        onClick={() => {
          // history.push("/detail");
          run();
        }}
      >
        To Detail
      </Button>
    </div>
  );
};
