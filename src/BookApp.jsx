import React, { Fragment } from "react";
//함수 - 객체 - 일급함수 - 고차함수
function Header(props) {
  console.log(props, props.title);
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      Hello, Web
    </article>
  );
}

function Nav(props) {
  const lis = [
    <li>
      <a href="/read/1">html</a>
    </li>,
    <li>
      <a href="/read/2">css</a>
    </li>,
    <li>
      <a href="/read/3">js</a>
    </li>,
  ];

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

const BookApp = () => {
  //변수선언부
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  //함수 선언부
  const methodA = () => {
    console.log("methodA 호출");
  };
  //리턴 아래 코드가 화면을 그린다 - 렌더링 - rendering
  return (
    <div>
      {/* 헤더에 속성을 넣고싶음 그렇게 하려면 속성값을 넣어줘야되는데, 그 부분을 props를 이용해서 넣어준다.
        title를 이용해서 이름을 부여하면 화면에 어떻게 찍히는가?
      
      */}
      <Header title="title"></Header>
      <Nav topics="topics"></Nav>
      <Article title="welcome" body="Hello"></Article>
    </div>
  );
};

export default BookApp;

/* rafce 화살표함수로 Syntax제공 */
