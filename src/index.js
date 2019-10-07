import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserSession, AppConfig } from "blockstack";

import App from "./App.js";

// Require Sass file so webpack can build it
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";

const appConfig = new AppConfig();
const userSession = new UserSession({ appConfig: appConfig });
setGlobal({
  user: {},
  userSession,
  friends: []
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
