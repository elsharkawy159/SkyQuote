import Link from "next/link.js";
import React from "react";

function Error() {
  return (
    <div className="errorbg vh-100 bg-dark d-flex justify-content-center align-items-center flex-column">
      <h2 className="text-white-50">404 Page Not Found</h2>
      <Link href={"/"} className="text-light btn btn-primary my-3">Back Home</Link>
    </div>
  );
}

export default Error;
