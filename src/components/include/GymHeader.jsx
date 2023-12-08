import React from "react";
import { Link } from "react-router-dom";
function GymHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <Link to="/" className="nav-link">
            독서모임
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  로그인
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/notice/noticeList.gd">
                  공지사항
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  회원관리
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  게시판
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default GymHeader;
