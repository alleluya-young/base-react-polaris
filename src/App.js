import React from "react";
import { Button } from "@shopify/polaris";
import { useConfig } from "./core/config";

function App() {
  const config = useConfig();

  console.log("@@@@@@@@@@@@", config);

  return (
    <div css={{ color: "red" }}>
      App
      <Button>Start</Button>
    </div>
  );
}

export default App;
