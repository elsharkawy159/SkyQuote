import React from "react";
import "./PopularQuotes.module.css";
import { QuoteCardList } from "../QuoteCard/QuoteCard.jsx";

export const PopularQuotes = () => {
  return (
    <div className="py-5 bg-black">
      <h2 className="text-center h6 pb-5 m-0 title text-light">Most Popular Quotes</h2>
      <QuoteCardList
        className={"d-flex"}
        length={6}
        col={"col-lg-3 col-md-4 col-8"}
      />
    </div>
  );
};
