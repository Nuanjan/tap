import "./App.css";
import React, { useState } from "react";
const arr = [
  { label: "Tap 1", content: "This is content 1", isActive: false },
  { label: "Tap 2", content: "This is content 2", isActive: false },
  { label: "Tap 3", content: "This is content 3", isActive: false },
];
function App() {
  const [content, setContent] = useState("");
  const [contentArr, setContentArr] = useState([...arr]);
  const onClickTap = (e, item) => {
    item.isActive = true;
    setContent(item.content);
  };
  return (
    <div>
      {contentArr.map((item, i) => {
        return (
          <button
            className="btn"
            onClick={(e) => onClickTap(e, item)}
          >
            {item.label}
          </button>
        );
      })}
      <div className="content-container">
        <h2>{content}</h2>
      </div>
    </div>
  );
}

export default App;
