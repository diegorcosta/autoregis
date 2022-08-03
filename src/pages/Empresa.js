import Header from "../components/Header";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import PageTitle from "../components/PageTitle";

import "../styles/Page.scss";

const Empresa = () => {
  setTitle("Empresa - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Empresa" />
      <section className="page">
        <div className="container">
          <p>
            Situados em Campina Grande - PB , nascemos do desejo de trazer
            produtos de excelência para nossos clientes, que hoje já se espalham
            por todo o Brasil, uma vez que temos como uma de nossas expertises o
            atendimento on-line.
          </p>
          <p>
            Transparência, eficiência e honestidade, são os pilares da nossa
            empresa. O que nos tornou uma das empresas do ramo automotivo que
            mais cresce na região.
          </p>
          <p>
            Somos pioneiros como loja de veículos seminovos a trabalhar também
            com peças e acessórios automotivos, que foi uma das inovações que
            trouxemos, afim de trazer ainda mais comodidade e opções para nossos
            clientes saírem da nossa loja com a sensação de ter realizado mais
            um sonho.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Empresa;
