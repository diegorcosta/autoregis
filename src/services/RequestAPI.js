import axios from "axios";
import { useEffect, useState } from "react";

const Request = () => {
  const [vehicles, setVehicles] = useState([]);

  const url = "https://hlg-webmotors.sensedia.com/oauth/v1/access-token";
  const endpoint = "https://hlg-webmotors.sensedia.com/site/v1/estoque/";
  const token =
    "MTJjMWI3N2ItZjk1Mi0zZTVhLWFjNzktNGUwNDIyNGJhNTNjOjU1ZDI1YWQ3LWJiMGUtM2RlYy04N2NjLTRkZTNiMGY0MjU5NQ==";

  const requestAPI = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
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
            console.log(vehicles);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="vehicles">
      <ul>
        {vehicles.map((car) => (
          <li key={car.id}>
            <h3>
              {car.vehicle.model.name}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Request;
