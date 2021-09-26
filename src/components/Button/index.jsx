//-----------------Basic imports------------------------
import React from "react";
import "./Button.scss";

//-----------------Libraries------------------------
import clsx from "clsx";

const Button = ({ children, className, click, disable, type }) => {
  return (
    <button
      type={type}
      disabled={disable}
      onClick={click}
      className={clsx("button", className, disable && "button_disabled")}
    >
      {children}
    </button>
  );
};

export default Button;
