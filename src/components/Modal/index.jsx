//Basic imports:
import React from "react";
import "./Modal.scss";

//Libraries:
import clsx from "clsx";

const Modal = ({ children, visible, onClosePopup }) => {
  //Layout:
  return (
    <div className={clsx("modal", visible && "modal__active")}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClosePopup}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 1L1 9" stroke="#C4C4C4" />
            <path d="M1 1L9 9" stroke="#C4C4C4" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
