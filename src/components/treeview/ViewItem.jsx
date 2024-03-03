import React, { useState } from "react";
import ViewList from "./ViewList";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./Styles.css";

const ViewItem = ({ item }) => {
  const [currentDisplayChildren, setCurrentDisplayChildren] = useState({});

  const handleToggleChange = (getCurrentLabel) => {
    setCurrentDisplayChildren({
      ...currentDisplayChildren,
      [getCurrentLabel]: !currentDisplayChildren[getCurrentLabel],
    });
  };

  console.log("currentChildren", currentDisplayChildren);

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }} className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChange(item.label)}>
            {currentDisplayChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      currentDisplayChildren[item.label] ? (
        <ViewList list={item.children} />
      ) : null}
    </li>
  );
};

export default ViewItem;
