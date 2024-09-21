import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <article className="main-container h-screen flex flex-col items-center justify-center">
      <img
        className="w-[35rem]"
        src="/page_not_found_2.gif"
        alt="page-not-found"
      />
      <Link href="/">
        <button className="btn-success h-9 w-24">Home</button>
      </Link>
    </article>
  );
};

export default PageNotFound;
