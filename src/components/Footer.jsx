import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook, faBookOpen, faBookOpenReader, faBookReader } from "@fortawesome/free-solid-svg-icons";

library.add(faBook, faBookOpen, faBookOpenReader, faBookReader);

const Footer = () => {
    return (
        <footer className="w-full bg-gray-500 shadow">
            <div className="container flex flex-col flex-wrap p-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                    <div className="flex items-center justify-center font-medium text-white title-font md:justify-start">
                        <span className="m-2 text-xl">Biblioteca</span>
                        <FontAwesomeIcon icon={faBook} />
                        <span className="m-2 text-xl">Pública</span>
                    </div>
                    <p className="mt-2 text-sm text-white md:hidden">Descubre mundos infinitos entre nuestras páginas</p>
                </div>
                <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Pages</h2>
                        <nav className="mb-10 list-none">
                            <li>
                                <NavLink to="/" className="text-sm text-white hover:text-gray-400">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboards" className="mt-2 text-sm text-white hover:text-gray-400">Dashboards</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="mt-2 text-sm text-white hover:text-gray-400">About US</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="mt-2 text-sm text-white hover:text-gray-400">Contact US</NavLink>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer