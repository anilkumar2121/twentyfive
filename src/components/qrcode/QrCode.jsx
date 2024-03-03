import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);

  const handleGenerateQrcode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ color: "red" }}>
        <center>Seventh Project About QR-CODE</center>
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div>
          <input
            type="text"
            name="qr-code"
            value={input}
            placeholder="enter your value here"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleGenerateQrcode}
            disabled={input && input.length !== 0 ? false : true}
          >
            Generate Qr Code
          </button>
        </div>

        <QRCode height="400" value={qrCode} />
      </div>
    </div>
  );
};

export default QrCode;
