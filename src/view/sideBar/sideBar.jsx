import React from "react";
import Navbar from "./navbar";
import PersonalInfo from "./personalInfo";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <PersonalInfo />
      <Navbar />
    </div>
  )
}

export default SideBar