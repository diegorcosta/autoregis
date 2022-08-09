import Header from "../components/Header";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import PageTitle from "../components/PageTitle";

import "../styles/Page.scss";

const Empresa = () => {
  setTitle("Financiamento - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Financiamento" />
      <section className="page"></section>
      <Footer />
    </main>
  );
};

export default Empresa;
