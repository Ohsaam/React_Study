import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import myReact from "./myReact";
// document.querySelector("#root")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <myReact />
    {/* myReact 화살표함수 실행한다. 좌중괄호 우중괄호 안은 자바스크립트
     함수의 이름으로 태그를 선언한다. () 묶는다.->
     {}가 있으면 자바스크립트 영역이다.
    */}
  </>
);
