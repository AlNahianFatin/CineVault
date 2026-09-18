// import { useState, useEffect } from "react";
// import { MoviesCard } from "../components/MoviesCard";
// import Loader from "../components/Loader";
// import { Pagination } from "../components/Pagination";

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);

//   const moviesPerPage = 30;

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         const response = await fetch(
//           "https://api.tvmaze.com/shows"
//         );

//         if (!response)
//           return <p>No data found!</p>

//         const data = await response.json();
//         setMovies(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchMovies();
//   }, []);

//   const totalPages = Math.ceil(movies.length / moviesPerPage);

//   const startIndex = (currentPage - 1) * moviesPerPage;
//   const currentMovies = movies.slice(
//     startIndex,
//     startIndex + moviesPerPage
//   );

//   const handleChange = async (movie) => {
//     setSearch(movie);

//     if (!movie.trim()) {
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         `https://api.tvmaze.com/search/shows?q=${movie}`
//       );

//       const data = await response.json();

//       const shows = data.map((item) => item.show);

//       if (!shows)
//         return <p>No data found</p>

//       setMovies(shows);
//       setCurrentPage(1);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="relative min-h-screen w-full">

//       <input
//         type="text"
//         placeholder="Search for a movie..."
//         className="absolute top-5 right-5 z-50 w-72 rounded-full border border-gray-300 bg-white px-4 py-2"
//         value={search}
//         onChange={(e) => handleChange(e.target.value)}
//       />

//       {loading ? (
//         <div className="flex min-h-screen items-center justify-center">
//           <Loader />
//         </div>
//       ) : (
//         <>
//           {
//             movies.length > 0 ? (
//               <>
//                 <div className="pt-20">
//                   <Pagination
//                     currentPage={currentPage}
//                     totalPage={totalPages}
//                     setCurrentPage={setCurrentPage}
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-3 lg:grid-cols-5">
//                   {currentMovies.map((movie) => (
//                     <MoviesCard
//                       key={movie.id}
//                       movie={movie}
//                     />
//                   ))}
//                 </div>
//               </>
//             ) : (
//               <p className="text-4xl text-red-500 flex min-h-screen items-center justify-center">Oops! No movie found</p>
//             )
//           }
//         </>
//       )}
//     </div>
//   );
// };

// export default Movies;


import { useState, useEffect } from "react";
import { MoviesCard } from "../components/MoviesCard";
import Loader from "../components/Loader";
import { Pagination } from "../components/Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 30;

  const fetchAllMovies = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.tvmaze.com/shows"
      );

      const data = await response.json();

      setMovies(data);
      setCurrentPage(1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/shows"
        );

        const data = await response.json();

        setMovies(data);
        setCurrentPage(1);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  const handleChange = async (value) => {
    setSearch(value);

    // Search box has been cleared
    if (!value.trim()) {
      await fetchAllMovies();
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`
      );

      const data = await response.json();

      // /search/shows returns { score, show }
      const shows = data.map((item) => item.show);

      setMovies(shows);
      setCurrentPage(1);
    } catch (error) {
      console.error(error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(
    movies.length / moviesPerPage
  );

  const startIndex =
    (currentPage - 1) * moviesPerPage;

  const currentMovies = movies.slice(
    startIndex,
    startIndex + moviesPerPage
  );

  return (
    <div className="relative min-h-screen w-full">

      {/* Search */}
      <input
        type="text"
        placeholder="Search for a movie..."
        className="absolute top-5 right-5 z-50 w-72 rounded-full border border-gray-300 bg-white px-4 py-2"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />

      {loading ? (
        <div className="flex min-h-screen items-center justify-center">
          <Loader />
        </div>
      ) : movies.length === 0 ? (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-lg text-gray-500">
            No movies found.
          </p>
        </div>
      ) : (
        <>
          {/* Pagination */}
          <div className="pt-20">
            <Pagination
              currentPage={currentPage}
              totalPage={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>

          {/* Movies */}
          <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-3 lg:grid-cols-5">
            {currentMovies.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;