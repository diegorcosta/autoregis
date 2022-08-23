import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import defaultImg from "../images/default-img.png";
import loadingSVG from "../images/loading.svg";

const Request = (props) => {
  const url = "https://hlg-webmotors.sensedia.com/oauth/v1/access-token";
  const token =
    "MTJjMWI3N2ItZjk1Mi0zZTVhLWFjNzktNGUwNDIyNGJhNTNjOjU1ZDI1YWQ3LWJiMGUtM2RlYy04N2NjLTRkZTNiMGY0MjU5NQ==";

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://hlg-webmotors.sensedia.com/site/v1/estoque?qty=${props.qty}&${props.page}`;

    const requestAPI = axios.create({
      baseURL: url,
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/json",
      },
    });

    requestAPI
      .post(url, {
        username: "teste@doin.com.br",
        password: "Teste@123",
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
      <h3 className="loading">
        <img src={loadingSVG} alt="Carregando" />
        Carregando...
      </h3>
    );
  }

  return (
    <div className="vehicles">
      <ul className="vehicles-cards">
        {vehicles?.map((car) => (
          <li key={car.id}>
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
              <Link
                to={{
                  pathname: `/${car.id}`,
                }}
              >
                <h3>{car.vehicle.model.name}</h3>
              </Link>
              <h4>{car.vehicle.brand.name}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Request;
