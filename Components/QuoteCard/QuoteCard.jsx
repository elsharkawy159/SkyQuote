import React, { useEffect, useState } from "react";
import style from "./QuoteCard.module.scss";
import { useQuoteContext } from "../../Context/quoteData.js";
import moment from "moment";
import Link from "next/link.js";
import EditQuote from "../EditQuote/EditQuote.jsx";
import Swal from "sweetalert2";
import { QuoteCardSkeleton } from "../QuoteCardSkeleton/QuoteCardSkeleton.jsx";

export const QuoteCard = ({ title, quote, by, at, col, quoteUID, quoteId }) => {
  const [isOwner, setisOwner] = useState(false);
  const { deleteQuote, quoteRes } = useQuoteContext();
  useEffect(() => {
    const userData = localStorage.getItem("UserData");
    if (userData) {
      const userDataObj = JSON.parse(userData);
      if (userDataObj._id) {
        const loggedUID = userDataObj._id;
        if (loggedUID == quoteUID) {
          setisOwner(true);
        } else {
          setisOwner(false);
        }
      }
    }
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(quote);
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 3000,
      background: "black",
      color: "white",
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Quote Copied",
    });
  };

  const handleDeleteQuote = (quoteUID, quoteId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteQuote(quoteUID, quoteId);
      }
    });
  };
  return (
    <div className={`${col} ${style.box} `}>
      <i
        className={`${style.fas} fa-solid fa-quote-left ${style.fa2} ${
          !isOwner || "text-primary"
        }`}
      ></i>

      <div className={style.text}>
        <i
          className={`${style.fas} fa-solid fa-quote-right ${style.fa1} ${
            !isOwner || "text-primary"
          }`}
        ></i>
        {isOwner ? (
          <>
            <span
              className={`${style.fas} ${style.fa1} ${style.edit}`}
              title="Edit"
            >
              <EditQuote quoteId={quoteId} title={title} description={quote} />
            </span>
            <i
              onClick={() => handleDeleteQuote(quoteUID, quoteId)}
              className={`${style.fas} fa-solid fa-trash ${style.fa1} ${style.delete}`}
              title="Delete"
            ></i>
          </>
        ) : null}

        <i
          onClick={handleCopyClick}
          className={`${style.fas} fa-solid fa-copy ${style.fa1} ${style.copy}`}
          title="Copy"
        ></i>
        <div>
          <h4>{title}</h4>
          <p
            className={`${style.quoteFont} overflow-auto text-light fs-5 mb-1`}
          >
            {quote}
          </p>
        </div>
        <div className="mt-auto h-100 d-flex align-content-end justify-content-between align-items-end flex-wrap">
          <p className="text-light m-0 mb-sm-4">
            <span className="fw-semibold opacity-75">Created By: </span>
            <Link
              href={`/profile/${quoteUID}`}
              className="text-light fw-medium"
            >
              {by}
            </Link>
          </p>
          <p className="text-light m-0 mb-sm-4">
            <span className="fw-semibold opacity-75">Date:</span> {at}
          </p>
        </div>
      </div>
    </div>
  );
};

export const QuoteCardList = ({ length, col }) => {
  const { quotes, isLoading } = useQuoteContext();

  if (isLoading) {
    return (
      <div className="conteiner-fluid">
        <div className="row justify-content-evenly gap-5 m-0">
          <QuoteCardSkeleton length={length || 10} col={col} />
        </div>
      </div>
    );
  }

  return (
    <div className="conteiner-fluid">
      <div className="row justify-content-evenly gap-5 m-0">
        {quotes?.quotes?.slice(0, length).map((quote) => (
          <QuoteCard
            key={quote?._id}
            quoteId={quote?._id}
            quoteUID={quote.author?._id}
            title={quote?.title}
            quote={quote?.description}
            by={quote?.author?.userName}
            at={moment(quote?.createdAt).format("LL")}
            col={col}
          />
        ))}
      </div>
    </div>
  );
};
