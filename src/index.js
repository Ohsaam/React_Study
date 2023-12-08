import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyReact from "./myReact";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { BrowserRouter } from "react-router-dom";
// document.querySelector("#root")
const root = ReactDOM.createRoot(document.getElementById("root"));
const a = 2;
root.render(
  <>
    <BrowserRouter>
      <MyReact a={a} />
    </BrowserRouter>
    {/* myReact 화살표함수 실행한다. 좌중괄호 우중괄호 안은 자바스크립트
     함수의 이름으로 태그를 선언한다. () 묶는다.->
     {}가 있으면 자바스크립트 영역이다.
    */}
  </>
);
