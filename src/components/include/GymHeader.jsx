import React from 'react'

function GymHeader() {
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-light navbar-light">

<div class="container-fluid">
    <a class = "navbar-brand" href = "">독서모임</a>
    <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">로그인</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="/notice/noticeList.gd">공지사항</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">회원관리</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">게시판</a>
        </li>
			
      </ul>
  </div>
</div>
	

</nav>
</>
  )
}

export default GymHeader