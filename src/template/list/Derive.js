import { List } from "./List";
import React from "react";

export const Category = () => {
  return (
    <div>
      分类
      <List />
    </div>
  );
};

export const AllProducts = () => {
  return (
    <div>
      所有产品
      <List />
    </div>
  );
};
