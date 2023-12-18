import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const GymHeader = () => {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-success navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            한빛미디어
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item" id="notice">
                <a class="nav-link active" aria-current="page" href="/board">
                  게시판
                </a>
              </li>

              <li class="nav-item" id="youtube">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/users/youtube"
                >
                  유튜브
                </a>
              </li>

              <li class="nav-item" id="movie">
                <a class="nav-link active" aria-current="page" href="#">
                  영화
                </a>
              </li>

              <li class="nav-item" id="calendar1">
                <a class="nav-link active" aria-current="page" href="/calender">
                  캘린더
                </a>
              </li>
            </ul>

            <div
              class="d-flex"
              onMouseEnter={(e) => {
                setStyle({ display: "block" });
              }}
              onMouseLeave={(e) => {
                setStyle({ display: "none" });
              }}
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" id="login">
                  <a class="nav-link active" aria-current="page" href="/login">
                    로그인
                  </a>
                </li>
                <li class="nav-item" id="email" style={style}>
                  <a
                    class="nav-link active"
                    aria-current="page"
                    id="mypage-link"
                  >
                    MyPage
                  </a>
                </li>

                <li class="nav-item" id="logout" style={style}>
                  <a class="nav-link active" aria-current="page">
                    로그아웃
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default GymHeader;
