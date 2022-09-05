import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import "../styles/WhatsAppButton.scss";

const WhatsAppButton = ({ number, title }) => {
  const whatsappNumber = `https://api.whatsapp.com/send?phone=${number}`;
  return (
    <a href={whatsappNumber} target="_blank" rel="noreferrer">
      <button className="whatsapp-button" type="button">
        <BsWhatsapp />
        <span>{title}</span>
      </button>
    </a>
  );
};

export default WhatsAppButton;
