import React from "react";
import ViewList from "./ViewList";
import data from "../treeview/data";
import "./Styles.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="treeViewContainer">
      <ViewList list={menus} />
    </div>
  );
};

export default TreeView;
