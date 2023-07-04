import React from "react";
import Skeleton from "@mui/material/Skeleton";
import style from "../QuoteCard/QuoteCard.module.scss";
import Fade from "react-reveal/Fade";

export const QuoteCardSkeleton = ({ length, col }) => {
  const skeletons = Array.from({ length }).map((_, i) => (
    <div key={i} className={`${col} ${style.box} `}>
      <Fade>
        <i className={`${style.fas} fa-solid fa-quote-left ${style.fa2}`}></i>
        <div className={style.text}>
          <i
            className={`${style.fas} fa-solid fa-quote-right ${style.fa1}`}
          ></i>

          <i
            className={`${style.fas} fa-solid fa-copy ${style.fa1} ${style.copy}`}
            title="Copy"
          ></i>
          <div>
            <h4 className="d-flex justify-content-center">
              <Skeleton animation="wave" style={{ width: "200px" }} />
            </h4>
            <p
              className={`${style.quoteFont} overflow-auto text-light fs-5 mb-1`}
            >
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </p>
          </div>
          <div className="mt-auto h-100 d-flex align-content-end justify-content-between align-items-end flex-wrap">
            <p className="text-light m-0 mb-sm-4 d-flex">
              <span className="fw-semibold opacity-75">Created By:</span>
              <p className="text-light fw-medium pointer m-0 ms-2">
                <Skeleton animation="wave" style={{ width: "100px" }} />
              </p>
            </p>
            <p className="text-light m-0 mb-sm-4 d-flex">
              <span className="fw-semibold opacity-75">Date:</span>{" "}
              <span className="m-0 ms-2">
                <Skeleton animation="wave" style={{ width: "100px" }} />
              </span>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  ));

  return <>{skeletons}</>;
};
