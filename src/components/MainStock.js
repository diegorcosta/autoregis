import Request from "../services/RequestAPI";
import "../styles/MainStock.scss";

const MainStock = () => {
  return (
    <section className="main-stock">
      <div className="container">
        <h2 className="title">Novidades do estoque</h2>
        <Request qty="9" />
        <p className="main-text">
          Confira nosso estoque completo <a href="/veiculos">clicando aqui</a>.
        </p>
      </div>
    </section>
  );
};

export default MainStock;
