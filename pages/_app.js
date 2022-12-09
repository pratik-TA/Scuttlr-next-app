import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import { useEffect } from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";
import { ThemeProvider } from 'styled-components'
import { myTheme } from '../theme'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <>
    <ThemeProvider theme={myTheme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
}

export default MyApp;