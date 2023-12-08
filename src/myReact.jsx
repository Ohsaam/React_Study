import React, { Fragment } from "react";
//함수 - 객체 - 일급함수 - 고차함수
/* 화살표 함수의 파라미터 자리는 props의 자리이다. 
   이 의미는 객체를 넘길 수 있다.
*/
const myReact = (props) => {
  //변수선언부
  //리턴 아래의 코드가 화면을 그린다(렌더링)
  //return 뒤에는 그려질 태그를 작성하는데 태그가 여러개면 괄호로 묶는다.
  return (
    <>
      <h2>myReact시스템</h2>
    </>
  );
};

export default myReact;

/* rafce 화살표함수로 Syntax제공 */
