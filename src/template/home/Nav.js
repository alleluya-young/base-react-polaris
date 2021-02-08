import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { map } from "lodash";
import { useHistory } from "react-router-dom";

const Navs = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "List",
    path: "/list",
  },
];

export const Nav = ({ onClose }) => {
  const history = useHistory();
  return (
    <List>
      {map(Navs, (item) => (
        <ListItem
          key={item.path}
          button
          onClick={() => {
            history.push(item.path);
            onClose && onClose();
          }}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
};
