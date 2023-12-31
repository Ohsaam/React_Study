import axios from "axios";
//인자 params안에 사용자가 입력한 값이 담겨 있다. const login = {mem_id:'kiwi', mem_pw:'123'}
export const memberInsertDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "POST",
        url: `http://172.16.2.3:9000/member/memberInsert`,
        params: params,
        data: {
          name: "나신입",
          email: "nice@hot.com",
        },
      }); //end of axios
      resolve(response); //response=> [{'mem_name':'나신입', 'mem_email':'nice@hot.com'}]
    } catch (error) {
      reject(error);
    }
  });
};
export const noticeListDB = (notice) => {
  //?gubun=n_title&keyword=휴관
  return new Promise((resolve, reject) => {
    try {
      console.log(notice);
      const response = axios({
        method: "get",
        url: "http://localhost:8000/notice/jsonNoticeList2.gd",
        params: notice,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
