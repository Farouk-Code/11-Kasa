import Header from "../components/Header";
import Layout from "../components/Layout";
import { FirstBanner } from "../components/Banners";
import LogementMenu from "../components/LogementMenu";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Header />
        <FirstBanner />
        <LogementMenu />
        <Footer />
      </Layout>
    </>
  );
};

export default Homepage;
