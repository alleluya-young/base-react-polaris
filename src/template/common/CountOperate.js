import { Stack } from "../../component/Stack";
import React, { useState } from "react";

const OpeStyle = {
  width: "1.2em",
  height: "1.2em",
  lineHeight: "1.2em",
  textAlign: "center",
};

export const CountOperate = ({ value, onChange }) => {
  const [count, setCount] = useState(0);
  return (
    <Stack
      inline
      css={{
        border: "1px solid #f1f1f1",
      }}
    >
      <div css={OpeStyle} onClick={() => setCount((pre) => pre - 1)}>
        -
      </div>
      <Stack
        align={"center"}
        justify={"center"}
        css={{
          borderLeft: "1px solid #f1f1f1",
          borderRight: "1px solid #f1f1f1",
          fontSize: "14px",
          minWidth: "2em",
        }}
      >
        {count}
      </Stack>
      <div css={OpeStyle} onClick={() => setCount((pre) => pre + 1)}>
        +
      </div>
    </Stack>
  );
};
