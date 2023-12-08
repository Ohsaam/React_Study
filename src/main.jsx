import React from "react";

export const main = () => {
  return <div>main</div>;
};

const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
// 객체에 JSX태그를 넣었다.
// 자식을 포함할 수 있다.
