import Header from "../components/Header";
import Footer from "../components/Footer";
import { SecondBanner } from "../components/Banners";
import Layout from "../components/Layout";
import About from "../components/About";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <SecondBanner />
        <About />
      </Layout>
      <Footer />
    </>
  );
};

export default AboutPage;
