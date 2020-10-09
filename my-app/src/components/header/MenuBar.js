import React from "react";
import "./MenuBar.scss";

const MenuBar = () => {
  return (
    <div className="mb">
      <a href="/">Home</a>
      <a href="/talent">Talents</a>
      <a href="/employer">Employers</a>
      <a href="/recruiter">Recruiters</a>
      <a href="/faq">FAQs</a>
    </div>
  );
};

export default MenuBar;
