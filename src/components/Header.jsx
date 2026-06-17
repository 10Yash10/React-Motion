import React from "react";

const Header = ({ text }) => {
  return (
    <div className="w-[80%] justify-self-center h-12 border-b-2 border-white/55">
      <h1 className="font-semibold text-4xl text-center">{text}</h1>
    </div>
  );
};

export default Header;
