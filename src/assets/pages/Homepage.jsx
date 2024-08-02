import Header from "../components/Header";
import Layout from "../components/Layout";
import { FirstBanner } from "../components/Banners";
import LogementMenu from "../components/LogementMenu";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Header />
        <FirstBanner />
        <LogementMenu />
      </Layout>
    </>
  );
};

export default Homepage;
