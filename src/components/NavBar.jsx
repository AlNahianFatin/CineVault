const NavBar = () => {
    return (
        <nav className="relative bg-blue-500 text-white min-w-full flex items-center p-2">
            <a href="/" className="flex items-center gap-2 px-5">
                <img className="h-8 w-8" src="/CineVault.svg" alt="CineVault Logo" />
                <h1 className="text-xl font-bold">Cine Vault</h1>
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
                <a className="hover:text-gray-700 transition-colors" href="/">Home</a>
                <a className="hover:text-gray-700 transition-colors" href="/movies">Movies</a>
            </div>
        </nav>);
};

export default NavBar;