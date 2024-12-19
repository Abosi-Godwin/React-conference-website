import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Logo from "./logo.jsx";

import { NavLink, Link, Outlet } from "react-router-dom";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const x = 30;
    return (
        <div className="relative top-0 left-0 h-fit z-50">
            <nav
                className="bg-700 text-white p-4 flex justify-between
        items-center w-screen fixed top-0 left-0"
            >
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <div>
                    <div className="md:hidden text-3xl" onClick={toggleMenu}>
                        {isOpen ? <FaXmark /> : <FaBarsStaggered />}
                    </div>
                </div>
                <ul
                    className={`flex flex-col items-center justify-evenly gap-4
                md:flex absolute top-0 text-blue-100 p-3
            left-[-100%] h-screen bg-500 text-white w-2/4 ${
                isOpen && "left-[0%]"
            }
            md:left-[0%] md:relative md:h-auto md:flex-row md:bg-transparent
            md:w-fit`}
                >
                    <NavLink to={`/`} className="text-2xl">
                        Home
                    </NavLink>
                    <NavLink to={`/about`} className="text-2xl">
                        About
                    </NavLink>
                    <NavLink to={`/speakers`} className="text-2xl">
                        Spekers
                    </NavLink>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Nav;
