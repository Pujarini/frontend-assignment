import React, { memo, useMemo } from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {
    const maxVisiblePages = 10;


    const pageNumbers = useMemo(() => {
        const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    }, [currentPage, totalPages, maxVisiblePages])


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

        <p>{currentPage} of {totalPages}</p>

        {/* {pageNumbers.map((number) => (
            <button
                key={number}
                onClick={() => onPageChange(number)}
                className={number === currentPage ? "active" : ""}
            >
                {number}
            </button>
        ))} */}

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