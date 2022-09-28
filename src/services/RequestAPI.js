import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";

import defaultImg from "../images/default-img.png";
import loadingSVG from "../images/loading.svg";

const Request = (props) => {
  const url = "https://api-webmotors.sensedia.com/oauth/v1/access-token";
  const token =
    "MTJjMWI3N2ItZjk1Mi0zZTVhLWFjNzktNGUwNDIyNGJhNTNjOjU1ZDI1YWQ3LWJiMGUtM2RlYy04N2NjLTRkZTNiMGY0MjU5NQ==";

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [brand, setBrand] = useState("");

  useEffect(() => {
    const endpoint = `https://api-webmotors.sensedia.com/site/v1/estoque?&query=${query}&brand=${brand}&qty=${props.qty}&p=${current}`;

    const requestAPI = axios.create({
      baseURL: url,
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/json",
      },
    });

    requestAPI
      .post(url, {
        username: "autoregiscg@hotmail.com",
        password: "AUTO1993regis@@",
        integracaoSite: "true",
        grant_type: "password",
      })
      .then(function (response) {
        axios
          .get(endpoint, {
            headers: {
              accept: "application/json",
              client_id: "d3196b21-7639-31fd-a1dd-7d5a72f52b3d",
              access_token: response.data.access_token,
            },
          })
          .then((res) => {
            setVehicles(res.data.hits);
            setTotal(res.data.total);
            setLoading(false);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line
  }, [current, query, brand]);

  function handleSelect(e) {
    setBrand(e.target.value);
    setLoading(true);
  }

  return (
    <div className="vehicles">
      <div className="search-bar">
        <select type="text" name="brand" onChange={handleSelect}>
          <option selected disabled>
            Marca
          </option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Chery">Chery</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="FIAT">FIAT</option>
          <option value="Ford">Ford</option>
          <option value="Jeep">Jeep</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Land Rover">Land Rover</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Nissan">Nissan</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
          <option value="Toyota">Toyota</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Honda">Honda</option>
        </select>
        <SearchInput
          value={query}
          onChange={(search) => {
            setQuery(search);
            setLoading(true);
            setCurrent(1);
          }}
        />
      </div>
      {loading ? (
        <h3 className="loading">
          <img src={loadingSVG} alt="Carregando" />
          Carregando...
        </h3>
      ) : (
        <div>
          <h3 className="total-items">
            <b>{total}</b> veículos encontrados.
          </h3>
          <ul className="vehicles-cards">
            {vehicles?.map((car) => {
              const price = car.price;
              const convertedPrice = +price;
              return (
                <Link
                  to={{
                    pathname: `/${car.id}`,
                  }}
                  key={car.id}
                >
                  <li>
                    <div className="img-box">
                      {car.photos?.[0] ? (
                        <img
                          src={car.photos[0]}
                          alt={car.vehicle.model.name}
                          onError={(e) => {
                            e.target.src = defaultImg;
                            e.target.onError = null;
                          }}
                        />
                      ) : (
                        <img src={defaultImg} alt="Sem fotos" />
                      )}
                    </div>
                    <div className="vehicle-info">
                      <h3>
                        {car.vehicle.model.name} {car.vehicle.year_model}
                      </h3>
                      <h4>
                        {car.vehicle.brand.name} - R${" "}
                        {convertedPrice.toLocaleString("pt-BR")}
                      </h4>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
      <Pagination
        limit={props.qty}
        total={total}
        current={current}
        setCurrent={setCurrent}
        offset={offset}
        setOffset={setOffset}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Request;
