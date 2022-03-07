import "./MovieCard.css";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import { FaStar } from "react-icons/fa";

const MovieCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="MovieCard">
      <img src={props.image} alt=""></img>
      <Button styleName="moreInfo" title="Saiba +" onFunction={() => setShowModal(true)}/>
      {showModal ? (
        <Modal
          onClose={() => setShowModal(false)}
          title={props.title}
          sinopse={props.sinopse}
          image={props.image}
        />
      ) : null}
      <span>{props.title}</span>
      <div className="rating">
        <FaStar size="1.2em" />
        <span>{props.rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
