/**
 * @author : 최정우
 * @since : 2022.09.20
 * @dscription : React를 활용한 Client단 구현의 시작점(Index) Component 입니다.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Application Root component
import App from "./pages/App.jsx";
import "../resources/css/reset.css";
import "../resources/css/layout.css";
import "../resources/css/common.css";
import "../resources/css/main.css";
import "../resources/css/responsive.css"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
