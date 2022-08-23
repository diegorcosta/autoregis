import Header from "../components/Header";
import MainHero from "../components/MainHero";
import MainStock from "../components/MainStock";
import MainAbout from "../components/MainAbout";
import MainContact from "../components/MainContact";
import Footer from "../components/Footer";
import setTitle from "../components/SetTitle";
import Address from "../components/Address";

const Home = () => {
  setTitle("Home - autoRÉGIS");
  return (
    <main>
      <Header />
      <MainHero />
      <MainStock />
      <MainAbout />
      <MainContact />
      <Address />
      <Footer />
    </main>
  );
};

export default Home;
