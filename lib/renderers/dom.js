import { createRoot } from "react-dom/client";
import React from "react";
import App from "components/App";
import StateApi from "state-api";

const store = new StateApi(window.initialData)

const div = document.getElementById("root");
createRoot(div).render(<App store={store} />);