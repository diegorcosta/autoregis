import Header from "../components/Header";
import MainHero from "../components/MainHero";
import MainStock from "../components/MainStock";
import MainAbout from "../components/MainAbout";
import MainContact from "../components/MainContact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <MainHero />
      <MainStock />
      <MainAbout />
      <MainContact />
      <Footer />
    </main>
  );
};

export default Home;
