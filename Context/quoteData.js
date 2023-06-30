import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const QuoteContext = createContext();

export default function QuotesContext({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [quoteRes, setQuoteRes] = useState("");
  const [quotes, setQuotes] = useState(null);

  const getAllQuotes = async (filter) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://note-keep-6545.vercel.app/note?filter=${filter || "date-desc"}`
      );
      setQuotes(data);
      setIsLoading(false);
    } catch (error) {
      setQuoteRes(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllQuotes();
    setQuoteRes("");
  }, []);

  const addQuote = async (values) => {
    setIsLoading(true);
    setQuoteRes("");
    try {
      const { data } = await axios.post(
        "https://note-keep-6545.vercel.app/note/add",
        values
      );
      setQuoteRes(data);
      if (data && data.success) {
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
          title: data.message,
        });
        getAllQuotes();
      }
      setIsLoading(false);
    } catch (error) {
      setQuoteRes(error);
      setIsLoading(false);
    }
  };

  const updateQuote = async (quoteId, values) => {
    setIsLoading(true);
    setQuoteRes("");
    try {
      const { data } = await axios.put(
        `https://note-keep-6545.vercel.app/note/${quoteId}`,
        values
      );
      setQuoteRes(data);
      setIsLoading(false);
      if (data && data.success) {
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
          title: data.message,
        });
        getAllQuotes();
      }
    } catch (error) {
      setQuoteRes(error);
      setQuoteRes(error);
    }
  };

  const deleteQuote = async (userId, quoteId) => {
    setQuoteRes("");
    setIsLoading(true);
    try {
      const { data } = await axios.delete(
        `https://note-keep-6545.vercel.app/note/${quoteId}`,
        { data: { userId: userId } }
      );
      setIsLoading(false);

      if (data) {
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
        if (data.success) {
          Toast.fire({
            icon: "success",
            title: data.message,
          });
        } else {
          Toast.fire({
            icon: "warning",
            title: data.message,
          });
        }
        getAllQuotes();
      }
    } catch (error) {
      setQuoteRes(error);
      setIsLoading(false);
    }
  };

  return (
    <QuoteContext.Provider
      value={{
        quotes,
        isLoading,

        getAllQuotes,
        addQuote,
        updateQuote,
        deleteQuote,

        quoteRes,
        setQuoteRes,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuoteContext() {
  return useContext(QuoteContext);
}
