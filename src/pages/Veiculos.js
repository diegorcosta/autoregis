import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import setTitle from "../components/SetTitle";

const Veiculos = () => {
  setTitle("Veículos - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Veículos" />
    </main>
  );
};

export default Veiculos;
