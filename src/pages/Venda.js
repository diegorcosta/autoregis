import Header from "../components/Header";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import PageTitle from "../components/PageTitle";

import "../styles/Page.scss";

const Empresa = () => {
  setTitle("Venda - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Venda" />
      <section className="page"></section>
      <Footer />
    </main>
  );
};

export default Empresa;
