import "./App.css";
import React, { useState } from "react";
import Tabs from "./components/Tabs";
const arr = [
  { label: "Tap 1", content: "Hello~" },
  { label: "Tap 2", content: "It'me" },
  { label: "Tap 3", content: "I'm in Califonia dream" },
];
function App() {
  return <Tabs arr={arr} />;
}

export default App;
