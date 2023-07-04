import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/productCard.css";
import Layout from "@/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome";
import "mdb-ui-kit/css/mdb.min.css";
import AuthData from "@/Context/authData";
import QuotesContext from "../Context/quoteData.js";

export default function MyApp({ Component, pageProps }) {
  //     useEffect(() => {
  // console.clear();
  //     }, [])

  return (
    <>
      <AuthData>
        <QuotesContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QuotesContext>
      </AuthData>
    </>
  );
}
