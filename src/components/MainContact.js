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
          <div>
            <form>
              <input type="name" placeholder="Nome" name="name" required />
              <input type="email" placeholder="E-mail" name="email" required />
              <input
                type="phone"
                placeholder="Telefone"
                name="phone"
                required
              />
              <select type="subject" name="subject" required>
                <option selected disabled>
                  Assunto
                </option>
                <option value="compra">Compra</option>
                <option value="venda">Venda</option>
                <option value="financiamento">Financiamento</option>
                <option value="outros">Outros</option>
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
