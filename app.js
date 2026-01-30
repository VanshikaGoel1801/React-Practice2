const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "i am a H1 Tag"),
    React.createElement("h2", { id: "heading2" }, "i am a H2 Tag "),
  ]),
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
