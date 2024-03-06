import { useState } from "react";
import bsufclogo from '../assets/bsufc-logo.png'

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (

        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-nav-dark">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#pablo"
                        >
                            <img src={bsufclogo} alt="Overlay Image" className="absolute top-0 left-0 lg:top-3 lg:left-24 h-24 w-24 object-cover z-0 rounded-full"/>
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <span className="material-symbols-outlined text-3xl">
                                menu
                            </span>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-primary-letter hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">PLAYERS</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-primary-letter hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">STAFF</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-primary-letter hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">STANDINGS</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-primary-letter hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">SCHEDULE</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
};

export default Navbar;
