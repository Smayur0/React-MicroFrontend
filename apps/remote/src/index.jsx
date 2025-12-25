import React from "react";
import { createRoot } from "react-dom/client";
// import("./Button");

const App = () => <h2>Remote React App</h2>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
