import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Veiculos from "../pages/Veiculos";
import Financie from "../pages/Financie";
import Venda from "../pages/Venda";
import Contato from "../pages/Contato";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/financie" element={<Financie />} />
        <Route path="/venda" element={<Venda />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
