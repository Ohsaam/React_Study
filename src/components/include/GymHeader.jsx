import React from "react";
import { Link } from "react-router-dom";

const GymHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <Link to="/" className="nav-link">
            여기내GYM
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  로그인
                </a>
              </li>
              <li className="nav-item">
                <Link to="/notice" className="nav-link">
                  공지사항
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  회원관리
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  QnA게시판
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default GymHeader;
