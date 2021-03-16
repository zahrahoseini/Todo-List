import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App/App";
import { Provider } from "react-redux";
import store from "store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
