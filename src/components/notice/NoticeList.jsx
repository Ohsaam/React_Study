import React, { useEffect, useState } from "react";
import { noticeListDB } from "../../service/dbLogic";

const NoticeList = () => {
  console.log("start");
  const [notice, setNotice] = useState({
    //함수 앞에 use가 붙으면 HOOK이라고 함 - 16.8버전 지원
    gubun: null,
    keyword: null,
  });
  useEffect(() => {
    console.log("effect");
    const noticeList = async () => {
      //비동기 처리로 요청하기위해서 async 추가 - await사용가능함
      const res = await noticeListDB(notice);
      console.log(res.data);
    };
    noticeList(); //호출하기
  }, [notice]); //의존성배열 - notice훅에 있는 값이 변경될때만 다시 실행한다.- 이걸 잘못사용하면 무한루프에 빠짐-주의
  return <div>NoticeList</div>;
};

export default NoticeList;
