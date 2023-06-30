import * as React from "react";
import { useQuoteContext } from "../../Context/quoteData.js";

export default function QuotesFilter() {
  const { getAllQuotes } = useQuoteContext();
  const handleChange = (event) => {
    getAllQuotes(event.target.value);
  };

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={handleChange}
      style={{width: "200px"}}
    >
      <option selected>Filter</option>
      <option value="az">Title (A - Z)</option>
      <option value="za">Title (Z - A)</option>
      <option value="date-desc">Date Descending</option>
      <option value="date-asc">Date Ascending</option>
    </select>
  );
}
