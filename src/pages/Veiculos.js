import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import Request from "../services/RequestAPI";

const Veiculos = () => {
  setTitle("Veículos - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Veículos" />
      <section className="page">
        <div className="container">{/* <Request qty="12" /> */}</div>
      </section>
      <Footer />
    </main>
  );
};

export default Veiculos;
