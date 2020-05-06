import React, { useState } from "react";
import InputFeedback from "./components/InputFeedback";
import { isBinary } from "./validations";
import { bin2Dec } from "./conversions";
import "./styles.css";

export default function App() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <h1>Binary to Decimal Conversion</h1>

      <div className="container">
        <input
          type="text"
          className="number-input"
          placeholder="Type a binary number..."
          onChange={event => setValue(event.target.value)}
        />
        <InputFeedback
          visible={error}
          message={"Invalid number. Please type only 0 or 1."}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <button
            className="btn"
            onClick={() => {
              setError(false);
              setResult("");
              if (isBinary(value)) {
                setResult(bin2Dec(value));
                return;
              }

              setError(true);
            }}
          >
            Convert
          </button>
          {result ? (
            <span style={{ paddingRight: 10 }}>Result: {result}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
