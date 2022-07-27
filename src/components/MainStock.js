import Request from "../services/RequestAPI";
import "../styles/MainStock.scss";

const MainStock = () => {
  return (
    <section className="main-stock">
      <div className="container">
        <h2 className="title">Novidades do estoque</h2>
        <Request />
      </div>
    </section>
  );
};

export default MainStock;
