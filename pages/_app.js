import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/productCard.css";
import Layout from "@/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "mdb-ui-kit/css/mdb.min.css";
import AuthData from "@/Context/authData";
import QuotesContext from "../Context/quoteData.js";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  //     useEffect(() => {
  // console.clear();
  //     }, [])

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Solitreo&family=Xanh+Mono:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        />
        <Script //MDB
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.js"
        />
        <Script src="https://unpkg.com/scrollreveal" />
        <Script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" />
      </Head>
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
