import React from "react";
import ViewList from "./ViewList";
import data from "../treeview/data";
import "./Styles.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>
        <center>Sixth Project About Recurrsion of Data</center>
      </h1>
      <div className="treeViewContainer">
        <ViewList list={menus} />
      </div>
    </div>
  );
};

export default TreeView;
