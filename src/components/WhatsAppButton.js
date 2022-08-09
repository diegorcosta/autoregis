import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import "../styles/WhatsAppButton.scss";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5583999355058"
      target="_blank"
      rel="noreferrer"
    >
      <button type="button">
        <BsWhatsapp />
        <span>(83) 9 9935-5058</span>
      </button>
    </a>
  );
};

export default WhatsAppButton;
