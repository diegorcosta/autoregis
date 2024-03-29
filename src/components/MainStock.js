import "../styles/MainStock.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import defaultImg from "../images/default-img.png";
import loadingSVG from "../images/loading.svg";

const MainStock = () => {
  const url = "https://api-webmotors.sensedia.com/oauth/v1/access-token";
  const token =
    "ZDMxOTZiMjEtNzYzOS0zMWZkLWExZGQtN2Q1YTcyZjUyYjNkOmU0OTZmZGVhLTEzOWEtMzI2Ny1iNGRjLTAzMmM3NzU3NGY5Yw==";

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://api-webmotors.sensedia.com/site/v1/estoque?qty=9`;

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
        password: "AUTO1993regis!!",
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
  }, []);

  if (loading) {
    return (
      <section className="main-stock">
        <div className="container">
          <h2 className="title">Novidades do estoque</h2>
          <h3 className="loading">
            <img src={loadingSVG} alt="Carregando" />
            Carregando...
          </h3>
        </div>
      </section>
    );
  }

  return (
    <section className="main-stock">
      <div className="container">
        <h2 className="title">Novidades do estoque</h2>
        <div className="vehicles">
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
        <p className="main-text">
          Confira nosso estoque completo <a href="/veiculos">clicando aqui</a>.
        </p>
      </div>
    </section>
  );
};

export default MainStock;
