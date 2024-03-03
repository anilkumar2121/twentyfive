import React from "react";
import ViewItem from "./ViewItem";
import "./Styles.css";

const ViewList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
    {list && list.length
      ? list.map((listItem) => <ViewItem item={listItem} />)
      : null}
  </ul>
  );
};

export default ViewList;
