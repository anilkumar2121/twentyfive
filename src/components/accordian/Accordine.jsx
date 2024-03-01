import React, { useState } from "react";
import data from "./data";
import "./Styles.css";

const Accordine = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [enableMultiSelection, setEnableMultiSeletion] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (getcurrentID) => {
    console.log(getcurrentID);
    setSelectedData(getcurrentID === selectedData ? null : getcurrentID);
  };

  const handleMultiSelect = (getcurrentID) => {
    let multpleCopy = [...multiple];

    const findIndexOfCurrenId = multpleCopy.indexOf(getcurrentID);

    if (findIndexOfCurrenId === -1) {
      multpleCopy.push(getcurrentID);
    } else {
      multpleCopy.splice(findIndexOfCurrenId, 1);
    }

    setMultiple(multpleCopy);
  };

  return (
    <div className="wrapper">
      <h1 style={{ color: "red" }}>
        <center>First Project About Multple Selecting</center></h1>
      <button onClick={() => setEnableMultiSeletion(!enableMultiSelection)}>
        {!enableMultiSelection ? (
          <div>Enable Multi Select</div>
        ) : (
          <div>Disable MultiSelect</div>
        )}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelect(item.id)
                      : () => handleClick(item.id)
                  }
                >
                  {item.question}
                  <span>+</span>
                </div>

                {enableMultiSelection
                  ? multiple.indexOf(item.id) !== -1 && (
                      <div className="content">{item.answer}</div>
                    )
                  : selectedData === item.id && (
                      <div className="content">{item.answer}</div>
                    )}
                {/* {selectedData === item.id ? (
                <div className="content">{item.answer}</div>
              ) : null} */}
              </div>
            );
          })
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordine;
