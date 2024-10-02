import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '../i18n'
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/mobile.css";
import "./assets/css/plyr.css"
import './assets/css/fonts.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
