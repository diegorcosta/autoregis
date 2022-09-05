import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import setTitle from "../components/SetTitle";
import InputMask from "react-input-mask";
import { FaCheck } from "react-icons/fa";
import emailjs from "emailjs-com";

import "../styles/Page.scss";

const Financiamento = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ebn7vib",
        "template_ujf682m",
        form.current,
        "G5PjV11ylL8LUFPbQ"
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

  setTitle("Financiamento - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Financiamento" />
      <section className="page">
        <div className="container">
          <div className="financiamento">
            <p>
              Pensou em financiar? Preencha o formulário abaixo com seus dados e
              nós entraremos em contato com você!
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <h3>Dados Pessoais</h3>
              <label for="name">
                Nome completo <span>(campo obrigatório)</span>
              </label>
              <input type="name" name="name" required />
              <div className="flex-items">
                <div className="item">
                  <label for="email">
                    E-mail <span>(campo obrigatório)</span>
                  </label>
                  <input type="email" name="email" required />
                </div>
                <div className="item">
                  <label for="tel">
                    Telefone <span>(campo obrigatório)</span>
                  </label>
                  <InputMask
                    mask="(99) 9 9999-9999"
                    name="tel"
                    type="tel"
                    required
                  />
                </div>
              </div>
              <div className="flex-items">
                <div className="item">
                  <label for="cpf">
                    CPF <span>(campo obrigatório)</span>
                  </label>
                  <InputMask
                    mask="999.999.999-99"
                    name="cpf"
                    type="text"
                    required
                  />
                </div>
                <div className="item">
                  <label for="date">
                    Data de nascimento <span>(campo obrigatório)</span>
                  </label>
                  <input type="date" name="date" required />
                </div>
              </div>
              <h3>Formas de financiamento</h3>
              <div className="flex-items">
                <div className="item">
                  <label for="financing-entry">
                    Entrada <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-entry" required />
                </div>
                <div className="item">
                  <label for="financing-value">
                    Valor a financiar <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-value" required />
                </div>
              </div>
              <label for="financing-quota">
                Parcelas <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input
                    value="6x"
                    id="6x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="6x">6x</label>
                </div>
                <div className="radio">
                  <input
                    value="12x"
                    id="12x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="12x">12x</label>
                </div>
                <div className="radio">
                  <input
                    value="24x"
                    id="24x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="24x">24x</label>
                </div>
                <div className="radio">
                  <input
                    value="48x"
                    id="48x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="48x">48x</label>
                </div>
                <div className="radio">
                  <input
                    value="60x"
                    id="60x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="60x">60x</label>
                </div>
              </div>
              <button type="submit" name="submit">
                Enviar
              </button>
              {status && renderAlert()}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Financiamento;
