import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import setTitle from "../components/SetTitle";

import "../styles/Page.scss";

const Financiamento = () => {
  setTitle("Financiamento - autoRÉGIS");
  return (
    <main>
      <Header />
      <PageTitle title="Financiamento" />
      <section className="page">
        <div className="container">
          <div className="financiamento">
            <p>
              Pensou em financiar? Preencha o formulário abaixo com seus dados e
              nós entraremos em contato com você!
            </p>
            <form>
              <h3>Dados Pessoais</h3>
              <label for="name">
                Nome completo <span>(campo obrigatório)</span>
              </label>
              <input type="name" name="name" required />
              <label for="email">
                E-mail <span>(campo obrigatório)</span>
              </label>
              <input type="email" name="email" required />
              {/* <label for="gender">
                Sexo <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input id="male" type="radio" name="gender" required />
                  <label for="male">Masculino</label>
                </div>
                <div className="radio">
                  <input id="female" type="radio" name="gender" required />
                  <label for="female">Feminino</label>
                </div> */}
              {/* </div> */}
              <div className="flex-items">
                {/* <div className="item">
                  <label for="marital-status">
                    Estado Civil <span>(campo obrigatório)</span>
                  </label>
                  <select name="marital-status" type="subject" required>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="solteiro">Casado(a)</option>
                    <option value="solteiro">Divorciado(a)</option>
                    <option value="solteiro">Viuvo(a)</option>
                    <option value="solteiro">Outros</option>
                  </select>
                </div> */}
                <div className="item">
                  <label for="cpf">
                    CPF <span>(campo obrigatório)</span>
                  </label>
                  <input type="number" name="cpf" required />
                </div>
                <div className="item">
                  <label for="date">
                    Data de nascimento <span>(campo obrigatório)</span>
                  </label>
                  <input type="date" name="date" required />
                </div>
                {/* <div className="item">
                  <label for="rg">RG</label>
                  <input type="number" name="rg" />
                </div>
                <div className="item">
                  <label for="agency">Órgão emissor</label>
                  <input type="text" name="agency" />
                </div>
                
                <div className="item">
                  <label for="date">Data de emissão</label>
                  <input type="date" name="date" />
                </div>
                <div className="item">
                  <label for="nationality">Nacionalidade</label>
                  <input type="text" name="nationality" />
                </div>
                <div className="item">
                  <label for="naturality">Naturalidade</label>
                  <input type="text" name="naturality" />
                </div>
                <div className="item">
                  <label for="father">Nome do pai</label>
                  <input type="text" name="father" />
                </div>
                <div className="item">
                  <label for="mother">Nome da mãe</label>
                  <input type="text" name="mother" />
                </div> */}
              </div>
              {/* <h3>Dados Residenciais</h3>
              <div className="flex-items">
                <div className="item">
                  <label for="address">
                    Endereço <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="address" required />
                </div>
                <div className="item">
                  <label for="address-number">
                    Nº <span>(campo obrigatório)</span>
                  </label>
                  <input type="number" name="address-number" required />
                </div>
                <div className="item">
                  <label for="complement">
                    Complemento <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="complement" required />
                </div>
                <div className="item">
                  <label for="district">
                    Bairro <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="district" required />
                </div>
                <div className="item">
                  <label for="state">
                    Estado <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="state" required />
                </div>
                <div className="item">
                  <label for="city">
                    Cidade <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="city" required />
                </div>
                <div className="item">
                  <label for="tel">
                    Telefone <span>(campo obrigatório)</span>
                  </label>
                  <input type="tel" name="tel" required />
                </div>
                <div className="item">
                  <label for="cell">
                    Celular <span>(campo obrigatório)</span>
                  </label>
                  <input type="tel" name="cell" required />
                </div>
                <div className="item">
                  <label for="typeof">
                    Tipo de residência <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="typeof" required />
                </div>
                <div className="item">
                  <label for="timeof">
                    Tempo de residência <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="timeof" required />
                </div>
              </div>
              <h3>Dados Trabalhistas</h3>
              <label for="company">
                Empresa <span>(campo obrigatório)</span>
              </label>
              <input type="text" name="company" required />
              <label for="cnpj">
                CNPJ <span>(campo obrigatório)</span>
              </label>
              <input type="number" name="cnpj" required />
              <div className="flex-items">
                <div className="item">
                  <label for="company-tel">
                    Telefone <span>(campo obrigatório)</span>
                  </label>
                  <input type="tel" name="company-tel" required />
                </div>
                <div className="item">
                  <label for="company-address">
                    Endereço <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="company-address" required />
                </div>
                <div className="item">
                  <label for="company-district">
                    Bairro <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="company-district" required />
                </div>
                <div className="item">
                  <label for="company-address-code">
                    CEP <span>(campo obrigatório)</span>
                  </label>
                  <input type="number" name="company-address-code" required />
                </div>
                <div className="item">
                  <label for="company-city">
                    Cidade <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="company-city" required />
                </div>
                <div className="item">
                  <label for="company-state">
                    Estado <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="company-state" required />
                </div>
                <div className="item">
                  <label for="function">
                    Cargo <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="function" required />
                </div>
                <div className="item">
                  <label for="sector">
                    Setor <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="sector" required />
                </div>
                <div className="item">
                  <label for="salary">
                    Salário <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="salary" required />
                </div>
                <div className="item">
                  <label for="other-revenue">
                    Outras rendas <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="other-revenue" required />
                </div>
              </div>
              <h3>Fonte de referências bancárias</h3>
              <div className="flex-items">
                <div className="item">
                  <label for="bank">
                    Banco <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="bank" required />
                </div>
                <div className="item">
                  <label for="client-since">
                    Cliente desde <span>(campo obrigatório)</span>
                  </label>
                  <input type="date" name="client-since" required />
                </div>
              </div>
              <h3>Fonte de referências pessoais</h3>
              <div className="flex-items">
                <div className="item">
                  <label for="ref-name">
                    Nome <span>(campo obrigatório)</span>
                  </label>
                  <input type="name" name="ref-name" required />
                </div>
                <div className="item">
                  <label for="ref-tel">
                    Telefone <span>(campo obrigatório)</span>
                  </label>
                  <input type="tel" name="ref-tel" required />
                </div>
                <div className="item">
                  <label for="ref-address">
                    Endereço <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="ref-address" required />
                </div>
              </div>
              <h3>Bens materiais - Veículo</h3>
              <div className="flex-items">
                <div className="item">
                  <label for="vehicle-brand">
                    Marca <span>(campo obrigatório)</span>
                  </label>
                  <input name="vehicle-brand" type="text" required />
                </div>
                <div className="item">
                  <label for="vehicle-model">
                    Modelo <span>(campo obrigatório)</span>
                  </label>
                  <input name="vehicle-model" type="text" required />
                </div>
                <div className="item">
                  <label for="vehicle-ref">
                    Ref Cml/financ <span>(campo obrigatório)</span>
                  </label>
                  <input name="vehicle-ref" type="text" required />
                </div>
                <div className="item">
                  <label for="vehicle-year">
                    Ano <span>(campo obrigatório)</span>
                  </label>
                  <input name="vehicle-year" type="number" required />
                </div>
                <div className="item">
                  <label for="vehicle-renavam">
                    Renavam <span>(campo obrigatório)</span>
                  </label>
                  <input name="vehicle-renavam" type="number" required />
                </div>
                <div className="item">
                  <label for="vehicle-chassi">
                    Chassi <span>(campo obrigatório)</span>
                  </label>
                  <input name="vehicle-chassi" type="text" required />
                </div>
                <div className="item">
                  <label for="vehicle-license-plate">
                    Placa <span>(campo obrigatório)</span>
                  </label>
                  <input name="vehicle-license-plate" type="text" required />
                </div>
                <div className="item">
                  <label for="vehicle-value">
                    Valor <span>(campo obrigatório)</span>
                  </label>
                  <input name="vehicle-value" type="text" required />
                </div>
              </div>
              <label for="vehicle-alien">
                Alienado <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input
                    id="vehicle-yes"
                    type="radio"
                    name="vehicle-alien"
                    required
                  />
                  <label for="vehicle-yes">Sim</label>
                </div>
                <div className="radio">
                  <input
                    id="vehicle-no"
                    type="radio"
                    name="vehicle-alien"
                    required
                  />
                  <label for="vehicle-no">Não</label>
                </div>
              </div>
              <h3>Bens materiais - Imóvel</h3>
              <div className="flex-items">
                <div className="item">
                  <label for="property-address">
                    Endereço <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="property-address" required />
                </div>
                <div className="item">
                  <label for="property-city">
                    Cidade <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="property-city" required />
                </div>
                <div className="item">
                  <label for="property-ref">
                    Ref Cml/financ <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="property-ref" required />
                </div>
                <div className="item">
                  <label for="property-value">
                    Valor <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="property-value" required />
                </div>
              </div>
              <label for="property-alien">
                Alienado <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input
                    id="property-yes"
                    type="radio"
                    name="property-alien"
                    required
                  />
                  <label for="property-yes">Sim</label>
                </div>
                <div className="radio">
                  <input
                    id="property-no"
                    type="radio"
                    name="property-alien"
                    required
                  />
                  <label for="property-no">Não</label>
                </div>
              </div> */}
              <h3>Formas de financiamento</h3>
              <div className="flex-items">
                {/* <div className="item">
                  <label for="financing-brand">
                    Marca <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-brand" required />
                </div>
                <div className="item">
                  <label for="financing-model">
                    Modelo <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-model" required />
                </div>
                <div className="item">
                  <label for="financing-year">
                    Ano <span>(campo obrigatório)</span>
                  </label>
                  <input type="number" name="financing-year" required />
                </div>
                <div className="item">
                  <label for="financing-color">
                    Cor <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-color" required />
                </div> */}
                {/* <div className="item">
                  <label for="financing-price">
                    Preço <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-price" required />
                </div> */}
                <div className="item">
                  <label for="financing-entry">
                    Entrada <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-entry" required />
                </div>
                <div className="item">
                  <label for="financing-value">
                    Valor a financiar <span>(campo obrigatório)</span>
                  </label>
                  <input type="text" name="financing-value" required />
                </div>
              </div>
              <label for="financing-quota">
                Parcelas <span>(campo obrigatório)</span>
              </label>
              <div className="radio-input">
                <div className="radio">
                  <input
                    id="72x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="6x">6x</label>
                </div>
                <div className="radio">
                  <input
                    id="12x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="12x">12x</label>
                </div>
                <div className="radio">
                  <input
                    id="24x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="24x">24x</label>
                </div>
                <div className="radio">
                  <input
                    id="48x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="48x">48x</label>
                </div>
                <div className="radio">
                  <input
                    id="60x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="60x">60x</label>
                </div>
                <div className="radio">
                  <input
                    id="72x"
                    type="radio"
                    name="financing-quota"
                    required
                  />
                  <label for="72x">72x</label>
                </div>
              </div>
              <button type="submit" name="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Financiamento;
