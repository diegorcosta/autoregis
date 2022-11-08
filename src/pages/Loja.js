import Header from "../components/Header";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import PageTitle from "../components/PageTitle";

import "../styles/Page.scss";

const Loja = () => {
  setTitle("Loja - autoRÉGIS");
  window.location.replace("https://autoregis.commercesuite.com.br/");
  return (
    <main>
      <Header />
      <PageTitle title="Nossa loja" />
      <section className="page">
        <div className="container">
          <p>Redirecionando...</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Loja;
