import React from "react";
import "./index.css";

const Pagination = ({
  handlePageChange,
  currentPage,
  totalPages,
  pageRangeDisplayed,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage, endPage;
    if (totalPages <= pageRangeDisplayed) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const midpoint = Math.floor(pageRangeDisplayed / 2);
      startPage = Math.max(currentPage - midpoint, 1);
      endPage = Math.min(currentPage + midpoint, totalPages);
      if (startPage === 1) {
        endPage = pageRangeDisplayed;
      } else if (endPage === totalPages) {
        startPage = totalPages - pageRangeDisplayed + 1;
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
          className={i === currentPage ? "active" : ""}
        >
          {" "}
          {i}{" "}
        </button>
      );
    }
    return pageNumbers;
  };
  return (
    <div className="paginationContainer">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
