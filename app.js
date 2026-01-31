import React from "react";
import ReactDOM from "react-dom/client";

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "i am a H1 Tag"),
    React.createElement("h2", { id: "heading2" }, "Testing again "),
  ]),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);
