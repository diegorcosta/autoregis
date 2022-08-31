import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import setTitle from "../components/SetTitle";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import InputMask from "react-input-mask";
import emailjs from "emailjs-com";

import "../styles/Page.scss";
import WhatsAppButton from "../components/WhatsAppButton";
import Address from "../components/Address";

const Contato = () => {
  setTitle("Contato - autoRÉGIS");

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
    <main>
      <Header />
      <PageTitle title="Fale Conosco" />
      <section className="page">
        <div className="container">
          <div className="contact-form-area">
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <p className="contact-text">
                  Se interessou por algum de nossos veículos? Tem alguma dúvida
                  sobre financiamentos ou vendas? Entre em contato através do
                  formulário abaixo ou fale com um dos nossos consultores
                  através do WhatsApp.
                </p>
                {status && renderAlert()}
                <input type="name" placeholder="Nome" name="name" required />
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  required
                />
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
            <div className="sidebar">
              <ul className="contact-list">
                <li>
                  <WhatsAppButton />
                </li>
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
      <Address />
      <Footer />
    </main>
  );
};

export default Contato;
