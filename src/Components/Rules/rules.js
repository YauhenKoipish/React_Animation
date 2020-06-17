import React from "react";

export default function Rules({ pageActive }) {
  return (
    <>
      {pageActive === "rules" ? (
        <div className="rules page-active"> Kim bolshoy dyadka</div>
      ) : (
        <div className="rules"> Kim bolshoy dyadka</div>
      )}
    </>
  );
}
