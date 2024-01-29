import React from "react";

const TabButton = ({ active, setTab, children }) => {
  const buttonClasses = active
    ? "text-[#04FE94] border-b border-[#04FE94]"
    : "text-[#ADB7BE] border-b border-[#ADB7BE]";

  return (
    <button onClick={setTab}>
      <p
        className={`mr-3 font-semibold hover:text-white hover:border-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
