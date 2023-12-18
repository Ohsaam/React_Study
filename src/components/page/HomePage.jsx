import React from "react";
import GymHeader from "../include/GymHeader";
import GymFooter from "../include/GymFooter";
import NoticeList from "../notice/NoticeList";

const HomePage = () => {
  return (
    <div>
      <GymHeader />
      <NoticeList />
      <GymFooter />
    </div>
  );
};

export default HomePage;
