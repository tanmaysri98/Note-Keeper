// Pagination.js
import React from "react";
import ReactPaginate from "react-paginate";
import NoteList from "./Notelist";

const Pagination = ({ pageCount, onPageChange }) => {
  return ( 
    <ReactPaginate
      previousLabel={"Previous... "}
      nextLabel={"  ...Next"}
      breakLabel={"..."}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
