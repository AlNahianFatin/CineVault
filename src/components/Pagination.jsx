export const Pagination = ({
  currentPage,
  totalPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center">
      <div className="join">

        {Array.from(
          { length: totalPage },
          (_, index) => index + 1
        ).map((page) => (
          <button
            key={page}
            type="button"
            className={`join-item btn border-blue-300 hover:bg-blue-600 ${
              currentPage === page
                ? "btn-primary bg-blue-400"
                : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

      </div>
    </div>
  );
};