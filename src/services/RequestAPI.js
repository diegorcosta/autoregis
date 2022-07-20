import axios from "axios";
import { useState } from "react";

// import DisplayVehicles from "../../components/DisplayVehicles";

const Request = () => {
  const url = "https://hlg-webmotors.sensedia.com/oauth/v1/access-token";
  const endpoint = "https://hlg-webmotors.sensedia.com/site/v1/estoque/";
  const token =
    "MTJjMWI3N2ItZjk1Mi0zZTVhLWFjNzktNGUwNDIyNGJhNTNjOjU1ZDI1YWQ3LWJiMGUtM2RlYy04N2NjLTRkZTNiMGY0MjU5NQ==";

  const [vehicles, setVehicle] = useState([]);

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
        .then((response) => {
          setVehicle(response.data.hits);
          console.log(vehicles.vehicle.model.name);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default Request;
