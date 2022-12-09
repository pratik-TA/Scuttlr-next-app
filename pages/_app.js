import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp;