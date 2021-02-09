import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { map } from "lodash";
import { useHistory } from "react-router-dom";

const Navs = [
  {
    label: "首页",
    path: "/",
  },
  {
    label: "所有产品",
    path: "/collections",
  },
  {
    label: "所有分类",
    path: "/category",
  },
  {
    label: "联系我们",
    path: "/contact-us",
  },
  {
    label: "问题列表",
    path: "/faq",
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
