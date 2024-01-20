import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
