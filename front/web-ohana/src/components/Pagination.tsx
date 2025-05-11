const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  setSearchParams,
}: any) => {
  const pageLimit = 5; // botones de página

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
    let endPage = Math.min(totalPages, startPage + pageLimit - 1);

    if (endPage - startPage + 1 < pageLimit) {
      startPage = Math.max(1, endPage - pageLimit + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center gap-2 mt-6">
      {/* Primera página << */}
      <button
        onClick={() => {
          setCurrentPage(0);
          setSearchParams({ page: "0" });
        }}
        className={`cursor-pointer px-4 py-2 rounded ${
          currentPage > 0 ? "bg-[#9a4c52] text-white" : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === 0}
      >
        &#60;&#60;
      </button>

      {/* Página anterior */}
      <button
        onClick={() => {
          if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            setSearchParams({ page: (currentPage - 1).toString() });
          }
        }}
        className={`cursor-pointer px-4 py-2 rounded ${
          currentPage > 0 ? "bg-[#9a4c52] text-white" : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === 0}
      >
        Anterior
      </button>

      {/* Páginas */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => {
            setCurrentPage(page - 1);
            setSearchParams({ page: (page - 1).toString() });
          }}
          className={`cursor-pointer px-4 py-2 rounded ${
            page - 1 === currentPage
              ? "bg-[#9a4c52] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Páginas finales con ... */}
      {currentPage < totalPages - 3 && totalPages > 5 && (
        <span className="cursor-pointer px-4 py-2 rounded bg-gray-200 text-black">
          ...
        </span>
      )}

      {currentPage < totalPages - 2 && totalPages > 5 && (
        <button
          onClick={() => {
            setCurrentPage(totalPages - 1);
            setSearchParams({ page: (totalPages - 1).toString() });
          }}
          className="cursor-pointer px-4 py-2 rounded bg-gray-200 text-black"
        >
          {totalPages}
        </button>
      )}

      {/* Siguiente */}
      <button
        onClick={() => {
          if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
            setSearchParams({ page: (currentPage + 1).toString() });
          }
        }}
        className={`cursor-pointer px-4 py-2 rounded ${
          currentPage < totalPages - 1
            ? "bg-[#9a4c52] text-white"
            : "bg-gray-200 text-black"
        }`}
        disabled={currentPage === totalPages - 1}
      >
        Siguiente
      </button>

      {/* Última página */}
      <button
        onClick={() => {
          setCurrentPage(totalPages - 1);
          setSearchParams({ page: (totalPages - 1).toString() });
        }}
        className={`cursor-pointer px-4 py-2 rounded ${
          currentPage <= totalPages - 1
            ? "bg-[#9a4c52] text-white"
            : "bg-gray-200 text-black"
        }`}
        disabled={currentPage >= totalPages - 1}
      >
        &#62;&#62;
      </button>
    </div>
  );
};

export default Pagination;
