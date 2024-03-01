import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generaterandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const createRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generaterandom(hex.length)];
    }

    console.log("hexxxxxxxxxx", hexColor);

    setColor(hexColor);
  };

  const createRandomRgbColor = () => {
    const r = generaterandom(256);

    const g = generaterandom(256);

    const b = generaterandom(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      createRandomRgbColor();
    } else {
      createRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <>
      <div>
        <h1 style={{ color: "red" }}>
          <center>Second Project About Generate Random Background Color</center>
        </h1>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: color,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={() => setTypeOfColor("hex")}>
              Create random hex color
            </button>
            <button onClick={() => setTypeOfColor("rgb")}>
              Create random rgb color
            </button>
            <button
              onClick={
                typeOfColor === "hex"
                  ? createRandomHexColor
                  : createRandomRgbColor
              }
            >
              Create random backgroundcolor
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h3>{typeOfColor === "rgb" ? `RGB color` : `hex color`}</h3>
            <h1>{color}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
