import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
// initializeApp함수는 firebase-app.js에서 제공하는 함수 입니다
//import { initializeApp } from "firebase/app";로컬에 설치되어 있을 때 사용하기
//type=module 기억 -  모듈지원 - 자바스크립트 쪼개기 가능함
//여기 생성된 객체는 어떻게 사용되죠?
//apiKey: 'AIzaSyAoa3Gw7USHw5sB81QhX3vTUyUuyhXe3nc',
//둘 - 파이어베이스 콘솔에서 mybook이라는 이름으로 플젝을 생성하면 키와 기타 정보들을 제공해줌
const firebaseConfig = {//나는 Object이다. - 클래스는 아니다
  //객체 - 키:값
  apiKey: 'AIzaSyC5nYQpjn_7KQtAGyj3mirZxjST146fFbo',
  authDomain: 'mybook-da621.firebaseapp.com',
  projectId: 'mybook-da621',
  storageBucket: 'mybook-da621.appspot.com',
  messagingSenderId: '3641176630',
  appId: '1:3641176630:web:2abb7f33f475d752e31e97',
};

// Initialize Firebase - 파이어베이스 플젝을 활용하여 웹서비스를 제공받기 위한 초기화 작업임
//앞에 export를 붙여야 외부에서 사용이 가능하다(ES6 모듈)
//<script type=module></script>
export const app = initializeApp(firebaseConfig); //초기화 - 인증 - 서버측 요청 - 응답(토큰값쥔다)
