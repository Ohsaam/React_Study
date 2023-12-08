npm i react-router-dom 엔터
<Routers><Routes/></Routers>
:위에서 작성된 Route가 페이지에 대응하는 정보를 담고있다.
:Navbar에 링크에 등록한 url(path 정보를) Route태그에서 일치하는 정보를 찾아서 화면에 출력한다.


외부 리소스를 사용할 때 index.js에 추가된다.
: 왜냐하면 Single Page Application이다.
: jsp인 경우 SPA처리가 쉽지않다.
이 떈, 비동기처리를 해야된다.
XMLHttpRequest, $.ajax({url:"xxx.do"})

1.리액트 경우 SPA를 기본으로 한다. (추가적인 비동기처리를 쉽게 처리할 수 있다.)
