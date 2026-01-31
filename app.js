import React from "react";
import ReactDOM from "react-dom/client";

// React Element converted to React component
const Heading = () => <h1>Hi from JSX</h1>;

// React component (has one more component nested inside it - comopnent composition)
const HeadingComponent = () => {
  return (
    <div id="container">
      <Heading />
      <h1>Hi this is a functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
