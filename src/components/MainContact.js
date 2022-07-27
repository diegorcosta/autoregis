import { MdEmail, MdLocationOn } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

import "../styles/MainContact.scss";

const MainContact = () => {
  return (
    <section className="main-contact">
      <div className="container">
        <h2 className="title">Fale Conosco</h2>
        <p className="main-text">
          Dúvidas sobre nossos veículos ou opções de compra e venda? Entre em
          contato conosco!
        </p>
        <div className="contact-form-area">
          <div className="column">
            <form>
              <input type="name" placeholder="Nome" name="name" required />
              <input type="email" placeholder="E-mail" name="email" required />
              <input
                type="phone"
                placeholder="Telefone"
                name="phone"
                required
              />
              <input
                type="subject"
                placeholder="Assunto"
                name="subject"
                required
              />
              <textarea
                type="text"
                placeholder="Escreva sua mensagem"
                name="message"
                required
              />
              <button type="submit" name="submit">
                Enviar
              </button>
            </form>
          </div>
          <div className="column">
            <ul className="contact-list">
              <li>
                <MdLocationOn />
                <span>
                  <p>R. Janúncio Ferreira, 600 - Centro</p>
                  <p>Campina Grande - PB</p>
                </span>
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
                <span>
                  <p>@autoregiscg</p>
                  <p>@autoregisparts</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContact;
