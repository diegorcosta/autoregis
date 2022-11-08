import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import "../styles/WhatsAppButton.scss";

const WhatsAppButton = ({ number, title, showNumber }) => {
  const whatsappNumber = `https://api.whatsapp.com/send?phone=${number}`;
  return (
    <a href={whatsappNumber} target="_blank" rel="noreferrer">
      <button className="whatsapp-button" type="button">
        <BsWhatsapp />
        <div>
          <span>{title}</span>
          <h2>{showNumber}</h2>
        </div>
      </button>
    </a>
  );
};

export default WhatsAppButton;
