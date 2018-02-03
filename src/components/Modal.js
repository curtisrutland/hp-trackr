import React from "react";

const Modal = ({ show, children }) => {
    return !show ? null : (
        <div id="backdrop">
            <div id="modal">
                {children}
            </div>
        </div>
    );
};

export default Modal;