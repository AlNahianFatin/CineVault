// export const Pagination = ({ currentPage, setCurrentPage }) => {
//     const pages = [0, 1, 2, 3];

//     return (
//         <div className="join">
//             {pages.map((page) => (
//                 <button
//                     key={page}
//                     type="button"
//                     className={`join-item btn btn-square ${currentPage === page ? "btn-primary" : ""
//                         }`}
//                     onClick={() => setCurrentPage(page)}
//                 >
//                     {page + 1}
//                 </button>
//             ))}
//         </div>
//     );
// };


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