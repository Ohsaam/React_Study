import React from "react";

const test = () => {
  return <div></div>;
};
//리액트 엘리먼트를 렌더링 하기 위해서는 
//DOM엘리먼트를 ReactDOM.createRoot()에 전달한 다음
// 리액트 엘리먼트를 root.render()에 전달해야된다.
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello, world</h1>;

export default test;
