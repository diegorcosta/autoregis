import Header from "../components/Header";
import MainAbout from "../components/MainAbout";
import MainContact from "../components/MainContact";
import MainHero from "../components/MainHero";

const Home = () => {
  return (
    <main>
      <Header />
      <MainHero />
      <MainAbout />
      <MainContact />
    </main>
  );
};

export default Home;
