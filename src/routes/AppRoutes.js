import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Veiculos from "../pages/Veiculos";
import Financiamento from "../pages/Financiamento";
import Venda from "../pages/Venda";
import Contato from "../pages/Contato";
import VehicleCard from "../components/VehicleCard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/veiculos/:id" element={<VehicleCard />} />
        <Route path="/financiamento" element={<Financiamento />} />
        <Route path="/venda" element={<Venda />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
