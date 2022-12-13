// import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.scss";
import { useEffect } from "react";
import Header from '../ui/header/index'
import Footer from '../ui/footer/index'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    const data = localStorage.getItem('Data');
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;

