import React, { useEffect, useRef, useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import InputMask from "react-input-mask";
import emailjs from "emailjs-com";

import "../styles/MainContact.scss";

const MainContact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ypfea9",
        "template_ddmz3ze",
        form.current,
        "ehqu_S93BUeCGqsjf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setStatus("SUCCESS");
    e.target.reset();
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  }, [status]);

  const renderAlert = () => (
    <div className="render-alert">
      <p>
        <FaCheck />
        Mensagem enviada com sucesso!
      </p>
    </div>
  );

  return (
    <section className="main-contact">
      <div className="container">
        <h2 className="title">Fale Conosco</h2>
        <p className="main-text">
          Dúvidas sobre nossos veículos ou opções de compra e venda? Entre em
          contato conosco!
        </p>
        <div className="contact-form-area">
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <input type="name" placeholder="Nome" name="name" required />
              <input type="email" placeholder="E-mail" name="email" required />
              <InputMask
                mask="(99) 9 9999-9999"
                placeholder="Telefone"
                name="phone"
                type="tel"
                required
              />
              <select type="subject" name="subject" required>
                <option selected disabled>
                  Assunto
                </option>
                <option value="Compra">Compra</option>
                <option value="Venda">Venda</option>
                <option value="Financiamento">Financiamento</option>
                <option value="Outros">Outros</option>
              </select>
              <textarea
                type="text"
                maxlength="500"
                name="message"
                placeholder="Escreva sua mensagem"
                required
              />
              <button type="submit" name="submit">
                Enviar
              </button>
              {status && renderAlert()}
            </form>
          </div>
          <div>
            <ul className="contact-list">
              <li>
                <MdLocationOn />
                <div>
                  <p>R. Janúncio Ferreira, 600 - Centro</p>
                  <p>Campina Grande - PB</p>
                  <p>CEP 58400-198</p>
                </div>
              </li>
              <li>
                <MdEmail />
                <p>autoregiscg@hotmail.com</p>
              </li>
              <li>
                <RiWhatsappFill />
                <p>(83) 9 9935-5058</p>
              </li>
              <li>
                <RiInstagramFill />
                <div>
                  <p>@autoregiscg</p>
                  <p>@autoregisparts</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContact;
