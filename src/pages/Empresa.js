import Header from "../components/Header";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import PageTitle from "../components/PageTitle";

import { TbTarget } from "react-icons/tb";
import { BsEyeFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

import storeFront from "../images/store-front.png";

import "../styles/Page.scss";

const Empresa = () => {
  setTitle("Empresa - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Nossa empresa" />
      <section className="page">
        <div className="container">
          <div className="page-content">
            <img
              className="store-front"
              src={storeFront}
              alt="Fachada da loja"
            />
            <p>
              Situados em Campina Grande - PB , nascemos do desejo de trazer
              produtos de excelência para nossos clientes, que hoje já se
              espalham por todo o Brasil, uma vez que temos como uma de nossas
              expertises o atendimento on-line.
            </p>
            <p>
              Transparência, eficiência e honestidade são os nosso pilares, o
              que nos tornou uma das empresas do ramo automotivo que mais cresce
              na região.
            </p>
            <p>
              Somos pioneiros como loja de veículos seminovos a trabalhar também
              com peças e acessórios automotivos, que foi uma das inovações que
              trouxemos, afim de trazer ainda mais comodidade e opções para
              nossos clientes saírem da nossa loja com a sensação de ter
              realizado mais um sonho.
            </p>
            <ul className="mvv">
              <li>
                <h2>
                  <TbTarget />
                  Missão
                </h2>
                <span>
                  Realizar a comercialização de automóveis novos e seminovos,
                  peças e serviços, com qualidade e foco na satisfação plena dos
                  clientes.
                </span>
              </li>
              <li>
                <h2>
                  <BsEyeFill />
                  Visão
                </h2>
                <span>
                  Ser referência no mercado pela excelência no relacionamento
                  com os clientes e na comercialização de produtos e serviços no
                  segmento automotivo.
                </span>
              </li>
              <li>
                <h2>
                  <FaHandshake />
                  Valores
                </h2>
                <span>
                  Ética, lealdade, comprometimento, transparência, respeito,
                  confiança, foco na excelência, organização, compromisso com o
                  resultado e união.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Empresa;
