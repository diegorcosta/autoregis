import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AiFillTag } from "react-icons/ai";
import { IoMdColorFill } from "react-icons/io";
import { IoCalendar, IoSpeedometer } from "react-icons/io5";
import { GoVersions } from "react-icons/go";
import { FaCar } from "react-icons/fa";

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import Gallery from "./Gallery";

import defaultImg from "../images/default-img.png";
import loadingSVG from "../images/loading.svg";

import "../styles/VehicleCard.scss";

const VehicleCard = () => {
  const url = "https://api-webmotors.sensedia.com/oauth/v1/access-token";
  const { id } = useParams();
  const token =
    "MTJjMWI3N2ItZjk1Mi0zZTVhLWFjNzktNGUwNDIyNGJhNTNjOjU1ZDI1YWQ3LWJiMGUtM2RlYy04N2NjLTRkZTNiMGY0MjU5NQ==";

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://api-webmotors.sensedia.com/site/v1/estoque?id=${id}`;

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
            setDetails(res.data.hits[0]);
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
  }, [id]);

  const price = details.price;
  const convertedPrice = +price;

  if (loading) {
    setTitle(`Veículos - autoRÉGIS`);
    return (
      <main>
        <Header />
        <PageTitle title="Veículos" />
        <section className="page">
          <div className="container">
            <h3 className="loading">
              <img src={loadingSVG} alt="Carregando" />
              Carregando...
            </h3>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  setTitle(`${details.vehicle.model.name} - autoRÉGIS`);
  return (
    <main>
      <Header />
      <PageTitle title={details.vehicle.model.name} />
      <section className="page">
        <div className="container">
          <div className="vehicle">
            <div className="gallery">
              {details.photos?.[0] ? (
                <Gallery galleryImages={details.photos} />
              ) : (
                <img
                  className="default-image"
                  src={defaultImg}
                  alt="Sem fotos"
                />
              )}
            </div>
            <ul className="details">
              <h2>{details.vehicle.model.name}</h2>
              <h4>{details.vehicle.brand.name}</h4>
              <li>
                <IoCalendar />
                <div>
                  <p>Ano: {details.vehicle.year_model}</p>
                </div>
              </li>
              <li>
                <GoVersions />
                <div>
                  <p>Versão: {details.vehicle.version.name}</p>
                </div>
              </li>
              <li>
                <IoMdColorFill />
                <div>
                  <p>Cor: {details.vehicle.color.name}</p>
                </div>
              </li>
              <li>
                <IoSpeedometer />
                <div>
                  <p>{details.vehicle.km.toLocaleString("pt-BR")} Km</p>
                </div>
              </li>
              <li>
                <FaCar />
                <div>
                  <p>Final da placa: ***.***{details.vehicle.plate_final}</p>
                </div>
              </li>
              <h3>
                <AiFillTag className="price-tag" />
                R$ {convertedPrice.toLocaleString("pt-BR")}
              </h3>
              <div className="description">
                <p>
                  <b>Acessórios</b>
                </p>
                <ul className="acessories">
                  {details.vehicle.acessories.name.map((acessorie, index) => (
                    <li key={index}>- {acessorie}</li>
                  ))}
                </ul>
              </div>
              <div className="interest">
                <p>Solicite uma proposta!</p>
                <a href="contato">
                  <button type="button">Fale conosco</button>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default VehicleCard;
