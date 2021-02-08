import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Stack } from "../../component/Stack";
import { ProductItemLine } from "../common/ProductItem";
import { times, map } from "lodash";
import { Button } from "@material-ui/core";

export const Cart = ({ onClose }) => {
  return (
    <Stack justify={"space-between"} css={{ minWidth: "18em", flex: 1 }}>
      <Stack
        inline
        justify={"space-between"}
        align={"center"}
        css={{
          borderBottom: "1px solid #f1f1f1",
          margin: "0 1em",
          padding: ".3em 0",
        }}
      >
        <Typography variant={"h6"}>购物车</Typography>
        <IconButton
          css={{ marginRight: "-.7em" }}
          onClick={() => {
            onClose && onClose();
          }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <div css={{ flexGrow: 1 }}>
        {map(times(3), (_, index) => (
          <React.Fragment key={index}>
            <ProductItemLine css={{ margin: "0 1em" }} />
            <div
              css={{
                height: "1px",
                backgroundColor: "#f1f1f1",
                margin: "0 1em",
              }}
            />
          </React.Fragment>
        ))}
      </div>
      <div css={{ padding: "0 1em" }}>
        <Stack inline justify={"space-between"}>
          <div>总计</div>
          <div>258$</div>
        </Stack>
        <Button css={{ width: "100%" }}>支付</Button>
      </div>
    </Stack>
  );
};
