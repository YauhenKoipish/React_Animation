import React from "react";

export default function Home({ pageActive }) {
  return (
    <>
      {pageActive === "home" ? (
        <div className="home page-active"> HOME PAGE HOME PAGE</div>
      ) : (
        <div className="home"> HOME PAGE HOME PAGE</div>
      )}
    </>
  );
}
