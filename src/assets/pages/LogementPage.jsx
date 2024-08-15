import Layout from "../components/Layout";
import Header from "../components/Header";
import { FirstBanner } from "../components/Banners";
import LogementsPage from "../components/LogementsPage";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Header />
        <FirstBanner />
        <LogementsPage />
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
