import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import "../styles/WhatsAppButton.scss";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=558399129196"
      target="_blank"
      rel="noreferrer"
    >
      <button className="whatsapp-button" type="button">
        <BsWhatsapp />
        <span>(83) 9912-9196</span>
      </button>
    </a>
  );
};

export default WhatsAppButton;
