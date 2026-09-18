import { X } from "lucide-react";

export const MovieModal = ({ movie, onClose }) => {
  const highlightTitle = (summary, title) => {
    const cleanSummary = summary?.replace(/<[^>]*>/g, "");

    if (!cleanSummary) {
      return "No description available.";
    }

    const parts = cleanSummary.split(new RegExp(`(${title})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === title.toLowerCase() ? (
        <b key={index}>{part}</b>
      ) : (
        part
      )
    );
  };

  return (
    <dialog open className="modal">
      <div className="modal-box bg-white text-gray-800 w-11/12 max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl">

        <X onClick={onClose} className="absolute top-4 right-4 border rounded-full p-1 bg-gray-200/60 hover:scale-130 cursor-pointer hover:bg-gray-500/60 transition-all" />

        <figure>
          <img
            src={movie?.image?.original}
            alt={movie?.name}
            className="w-full max-w-xl h-120 rounded-xl"
          />
        </figure>

        <h3 className="font-bold text-xl sm:text-2xl text-blue-700 mt-4">
          {movie?.name}
        </h3>

        <div className="flex justify-center gap-3 w-fit my-2">
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

        <div className="py-4">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {highlightTitle(movie?.summary, movie?.name)}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="btn btn-primary bg-blue-500 rounded-full text-white hover:text-gray-700 transition-all text-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>

      <form
        method="dialog"
        className="modal-backdrop bg-gray-800/60"
      >
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};