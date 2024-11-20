import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AlertProvider from "rtc-alerts2/AlertProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlertProvider>
      <App />
    </AlertProvider>
  </BrowserRouter>
);
