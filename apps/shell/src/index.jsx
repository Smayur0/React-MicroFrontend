import React from "react";
import { createRoot } from "react-dom/client";
const Button = React.lazy(() => import("remoteButton/ButtonCompo"));

const App = () => {
  return (
    <>
      <h2>Remote React App</h2>
      <Button name="Remote a button" />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
