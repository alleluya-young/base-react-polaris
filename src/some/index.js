import React from "react";
import Button from "@material-ui/core/Button";
import { useRequest } from "../core/request";
import {useConfig} from "../core/config";

export const Demo = () => {
    const config = useConfig();

  const [data, run, loading, error] = useRequest(
    "https://srv-bff-park-home--hechuan.rockontrol.com:40443/bff-park-home/v0/visitor/investment/policy?offset=0&size=10"
  );

  console.log("@@@@@@@@@@@@###", data, loading, error);

    console.log("@@@@@@@@@@@@", config);

  return (
    <div>
      <Button onClick={()=>{
          run();
      }}>request</Button>
    </div>
  );
};
