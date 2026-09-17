import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="relative bg-blue-500 text-white min-w-screen text-xl flex justify-center gap-5 p-2">
            <h2>© {year} Cine Vault</h2>
            <a className="px-7 py-1" href="https://github.com/AlNahianFatin/CineVault"><FaGithub /></a>
        </div>
    );
};

export default Footer;