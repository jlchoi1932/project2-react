import React from "react";
import Button from "./Button.jsx";

export default function Modal({ children, open, close,header }) {
  return (
    <div class={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className="modal-inner">
          <div className="modal-header flex">
            {header}
            <Button className={"close"} onClick={close} btnName={"X"} />
          </div>
          <div className="modal-main">{children}</div>
        </div>
      ) : null}
    </div>
  );
}
