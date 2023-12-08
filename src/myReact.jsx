import React, { Fragment } from "react";
import { Route, Router } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import NoticePage from "./components/page/NoticePage";
//함수 - 객체 - 일급함수 - 고차함수
/* 화살표 함수의 파라미터 자리는 props의 자리이다. 
   이 의미는 객체를 넘길 수 있다.
*/
const MyReact = (props) => {
  //변수선언부
  //리턴 아래의 코드가 화면을 그린다(렌더링)
  //return 뒤에는 그려질 태그를 작성하는데 태그가 여러개면 괄호로 묶는다.
  console.log({ props });
  console.log(props.a);
  return (
    <>
      <div>
        <Router>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route
            path="/notice/noticeList"
            exact={true}
            element={<NoticePage />}
          />
        </Router>
      </div>
    </>
  );
};

export default MyReact;

/* rafce 화살표함수로 Syntax제공 */
