import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Header from '../ui/header/index'
import Footer from '../ui/footer/index'
import { AppWrapper } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    const data = localStorage.getItem('Data');

    if (!data) {
      // return {
      //   redirect: {
      //     destination: '/unAuthenticated',
      //     permanent: false,
      //   },
      // }
    }

  }, []);

  return (
    <>
     {/* <AppWrapper> */}
        <Header />
        <Component {...pageProps} />
        <Footer />
     {/* </AppWrapper> */}
    </>
  )
}

// const user = localStorage.getItem('User')

// export async function getServerSideProps (user) {


//   if (!user) {
//     return {
//       redirect: {
//         destination: '/unAuthenticated',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: { user },
//   }
// } 
export default MyApp;

