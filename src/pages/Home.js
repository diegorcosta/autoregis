import Header from "../components/Header";
import MainAbout from "../components/MainAbout";
import MainContact from "../components/MainContact";
import MainHero from "../components/MainHero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <MainHero />
      <MainAbout />
      <MainContact />
      <Footer />
    </main>
  );
};

export default Home;
