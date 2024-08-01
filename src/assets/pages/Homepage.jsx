import Header from "../components/Header";
import Layout from "../components/Layout";
import { FirstBanner } from "../components/Banners";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Header />
        <FirstBanner />
      </Layout>
    </>
  );
};

export default Homepage;
