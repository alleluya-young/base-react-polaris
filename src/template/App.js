import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Stack } from "../component/Stack";
import { Nav } from "./home/Nav";
import { Routes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Cart } from "./cart/Cart";

export const Structure = ({ children }) => {
  const [openMenuState, setOpenMenuState] = useState(false);
  const [openCartState, setOpenCartState] = useState(false);

  return (
    <div>
      <AppBar color={"transparent"} position={"static"} elevation={0}>
        <Toolbar css={{ padding: 0 }}>
          <IconButton
            onClick={() => {
              setOpenMenuState(true);
            }}
          >
            <MenuIcon css={{ color: "black" }} />
          </IconButton>
          <Stack inline justify={"center"} css={{ flexGrow: 1 }}>
            <span>图标</span>
          </Stack>
          <IconButton
            onClick={() => {
              setOpenCartState(true);
            }}
          >
            <ShoppingCartIcon css={{ color: "black" }} fontSize="default" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"left"}
        open={openMenuState}
        onClose={() => {
          setOpenMenuState(false);
        }}
      >
        <div css={{ minWidth: "18em" }}>
          <Nav onClose={() => setOpenMenuState(false)} />
        </div>
      </Drawer>
      <Drawer
        anchor={"right"}
        open={openCartState}
        onClose={() => {
          setOpenCartState(false);
        }}
      >
        <Cart onClose={() => setOpenCartState(false)} />
      </Drawer>

      {children}
    </div>
  );
};

export const App = () => {
  return (
    <Router>
      <Structure>
        <Routes />
      </Structure>
    </Router>
  );
};
