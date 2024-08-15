import Layout from "../components/Layout";
import Header from "../components/Header";
import LogementsPage from "../components/LogementsPage";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Header />
        <LogementsPage />
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
