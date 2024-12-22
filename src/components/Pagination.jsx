import React, { memo, useMemo } from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {


    return <nav className="pagination" aria-label="Pagination navigation"
        role="navigation">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
            aria-label="Go to previous page"
            className={currentPage == totalPages ? "active" : ""}
        >
            Previous
        </button>

        <span>{currentPage} of {totalPages}</span>

        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
            aria-label="Go to next page"
            className={currentPage == totalPages ? "" : "active"}
        >
            Next
        </button>
    </nav>

}

export default memo(Pagination);