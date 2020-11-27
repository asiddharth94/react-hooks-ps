import React, { useState } from "react";

const InputElement = () => {
  const [userInput, setUserInput] = useState("");

  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        placeholder="Enter some text"
        onChange={(event) => {
          setHistoryList([...historyList, event.target.value]);
          setUserInput(event.target.value);
        }}
      />
      <br />
      {userInput}
      <hr />
      <br />
      <ul>
        {historyList.map((item) => {
          return <div>{item}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
