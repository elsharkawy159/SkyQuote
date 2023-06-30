import Link from "next/link.js";
import React from "react";
import { QuoteCardList } from "../Components/QuoteCard/QuoteCard.jsx";
import QuotesFilter from "../Components/QuotesFilter/QuotesFilter.jsx";
import Head from "next/head.js";

export default function quotes() {
  return (
    <>
      <Head>
        <title>Quotes</title>
        <meta
          name="description"
          content="Our website is a platform where you can freely share your favorite quotes and discover new ones from other users. Whether it's a thought-provoking line from a book or a motivational quote from a famous personality, you can easily add it to our collection for everyone to see"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={`container-fluid m-0 p-0 quotesbg d-flex align-items-center justify-content-start`}
      >
        <div className="overlay">
          <div></div>
          <div className="quotesList py-5">
            <div className="d-flex justify-content-start ms-5 p-5">
              <QuotesFilter />
            </div>
            <QuoteCardList col={"col-md-3"} />
          </div>
        </div>
      </section>
    </>
  );
}
