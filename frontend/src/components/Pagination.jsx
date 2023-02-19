import React from "react";

export default function Pagination({ page, setpage, total }) {
  const prev = (
    <button
      disabled={page === 1}
      onClick={() => setpage(page - 1)}
      style={{
        backgroundColor: "teal",
        width: "3rem",
        borderRadius: "5px",
        height: "2rem",
        spacing: "2rem",
        margin: "auto",
      }}
    >
      PREV
    </button>
  );
  const Next = (
    <button
      disabled={page === total}
      onClick={() => setpage(page + 1)}
      style={{
        backgroundColor: "teal",
        width: "3rem",
        borderRadius: "5px",
        height: "2rem",
        spacing: "2rem",
        margin: "auto",
      }}
    >
      Next
    </button>
  );
  const pages = new Array(total).fill(0).map((item, index) => (
    <button
    style={{backgroundColor:"teal",width:"3rem",borderRadius:"5px",height:"2rem",spacing:"2rem",margin:"auto"}}
      disabled={page === index + 1}
      onClick={() => setpage(index + 1)}
      key={index + 1}
    >
      {index + 1}
    </button>
  ));
  return (
    <div>
      {" "}
      {pages}
      <div>
        {prev} {Next}
      </div>
    </div>
  );
}
