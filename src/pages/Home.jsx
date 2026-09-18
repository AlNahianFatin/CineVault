const Home = () => {

  return (
    <div>
      <h1 className="py-5 text-4xl flex justify-center">DISCOVER MOVIES</h1>
      <h2 className="text-xl flex justify-center">Explore and discover your favorite movies from around the world.</h2>
      <a href="/movies" className="flex items-center justify-center mx-auto mt-5 w-30 bg-blue-500 rounded-full py-2 text-white hover:text-gray-700 hover:scale-110 transition-all">Explore Now</a>
    </div>
  );
};

export default Home;
