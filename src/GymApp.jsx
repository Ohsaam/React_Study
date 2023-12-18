import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import NoticePage from "./components/page/NoticePage";
//함수 - 객체 - 일급함수 - 고차함수
//화살표 함수의 파라미터 자리는 props의 자리이다 - 객체를 넘길 수 있다.
//return뒤에는 그려질 태그를 작성하는데 태그가 여러개면 괄호로 묶음
const GymApp = (props) => {
  //화살표함수
  //변수선언부
  //리턴 아래 코드가 화면을 그린다 - 렌더링 - rendering
  //함수의 이름으로 태그를 선언한다???
  return (
    <>
      <div>
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/notice" exact={true} element={<NoticePage />} />
        </Routes>
      </div>
    </>
  );
};

export default GymApp; //ES6 - 모듈 - 2015

/* rafce 화살표함수로 Syntax제공 */
