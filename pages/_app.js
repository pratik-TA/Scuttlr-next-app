import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Header from '../ui/header/index'
import Footer from '../ui/footer/index'
import AuthContext from '../context/AuthContext'
import UnAuth from "./unAuthenticated";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

  }, []);

  const name = 'testing';



  // for unauthorized user 

  if (!name) {
    return <UnAuth />
  }

  return (
    <>
      <AuthContext.Provider value={name}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthContext.Provider>
    </>
  )
}


// export async function getServerSideProps () {


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

