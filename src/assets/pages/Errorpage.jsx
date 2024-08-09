import Header from "../components/Header";
import Layout from "../components/Layout";
import Error from "../components/error";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Error />
      </Layout>
      <Footer />
    </>
  );
};

export default ErrorPage;
