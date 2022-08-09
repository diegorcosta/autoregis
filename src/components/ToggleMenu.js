const ToggleMenu = ({ isMenuOpen }) => {
  return (
    <nav className={`main-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/empresa">Empresa</a>
        </li>
        <li>
          <a href="/veiculos">Veículos</a>
        </li>
        <li>
          <a href="/financiamento">Financiamento</a>
        </li>
        <li>
          <a href="/venda">Venda</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default ToggleMenu;
