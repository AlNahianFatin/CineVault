import { useState } from "react";
import { MovieModal } from "./MovieModal";

export const MoviesCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="card bg-base-100 border border-blue-100 hover:shadow-lg w-full rounded-xl p-5 hover:scale-105 transition-all">
        <figure>
          <img
            src={movie?.image?.medium}
            alt={movie?.name || "Movie name not found"}
            className="w-full rounded-xl"
          />
        </figure>

        <div className="card-body py-2">

          <h2 className="card-title text-xl text-center text-blue-700 p-2 w-full justify-center">
            {movie?.name || "Movie name not found"}
          </h2>

          <div className="flex flex-wrap justify-center gap-3 w-full my-2">
            {movie?.genres &&
              movie.genres.map((genre) => (
                <div
                  key={genre}
                  className="badge badge-secondary bg-blue-300 p-2 rounded-2xl"
                >
                  {genre}
                </div>
              ))}
          </div>

          <div className="text-blue-400 flex justify-between text-sm">
            {
              movie?.rating?.average && (
                <p>⭐ {movie?.rating?.average}/10</p>)
            }

            {
              movie?.premiered && (
                <p>
                  📅{" "}
                  {movie?.premiered
                    ? new Date(movie.premiered).toLocaleDateString()
                    : "N/A"}
                </p>)
            }
          </div>

          <div className="card-actions flex justify-center mt-auto">
            <button
              type="button"
              className="btn btn-primary w-fit bg-blue-500 rounded-full text-white hover:text-gray-700 transition-all text-sm"
              onClick={handleClick}
            >
              See Details
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <MovieModal
          movie={movie}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};