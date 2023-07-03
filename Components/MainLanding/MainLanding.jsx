import React from "react";
import style from "./MainLanding.module.css";
import { QuoteCardList } from "../QuoteCard/QuoteCard.jsx";

export const MainLanding = () => {
  return (
    <section>
      <div
        className={`container-fluid ${style.bg_main} d-flex align-items-center justify-content-start`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="scriptFont text-light opacity-75">
                Add and Disover Amazing Quotes
              </h2>
              <h1 className="fw-bold text-light title"></h1>
              <h1
                className="fw-bolder text-light mt-4"
                style={{ fontSize: "60px" }}
              >
                Add Your{" "}
                <span className="title position-relative discountBg">
                  Quote
                </span>{" "}
                Now
              </h1>
            </div>
            <div className="col-md-6">
              <p className="text-light text-center mb-3">Latest Added Quote</p>
              <QuoteCardList col={"col-9"} length={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainLanding;
