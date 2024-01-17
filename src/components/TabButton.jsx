import React from "react";

const TabButton = ({ active, setTab, children }) => {
const buttonClasses = active ? "text-white border-b border-white" : "text-[#ADB7BE] border-b border-[#ADB7BE]";

    return (
        <button onClick={setTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton;
