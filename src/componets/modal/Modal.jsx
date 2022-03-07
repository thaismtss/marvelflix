import "./Modal.css";
import React from "react";

const Modal = ({ id = "modal", onClose = () => {}, title, sinopse, image }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    <div className="Modal" id={id} onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}>
          x
        </button>
        <div className="content">
          <div className="title">{title}</div>
          <div className="container-movie">

          <img src={image} alt="" />
          <span>
            <strong>Sinopse: </strong>
            {sinopse}
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
