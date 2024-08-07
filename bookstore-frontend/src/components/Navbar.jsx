import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollListener from "./hooks/useScrollListener";
import './Navbar.css';

function Navbar() {
    const [navClassList, setNavClassList] = useState([]);
    
    const scroll = useScrollListener();

    //update classList of nav on scroll
    useEffect(() => {
    const _classList = [];

    if (scroll.y > 30 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);

    return (
        <header
        className={`sticky top-0 w-full transition-all duration-300 ease-in-out transform ${navClassList.join(" ")}`}
        style={{ zIndex: "9999999" }}
        >
        <div className="mx-auto flex flex-row flex-wrap p-2 md:justify-normal justify-between items-center bg-[rgb(212,230,227)]">
            <Link
            to="/"
            className="flex title-font font-medium items-center text-grey-900 mr-4 border-r-none md:border-r border-gray-900 pr-4 md:mb-0"
            >
            <img
                src="./logo192.png"
                alt="pine grove"
                className="w-8 h-8"
            />
            <span className="ml-3 text-3xl md:block hidden">
                Cyber Shelf Bookstore
            </span>
            </Link>
            <nav
            className={`flex justify-center flex-row flex-grow md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-base items-center p-4`}
            >
            <Link
                to="/"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                Home
            </Link>
            {/* <Link
                to="/add-book"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                ADD BOOK
            </Link> */}
            <Link
                to="/all-books"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                All Books
            </Link>
            <Link
                to="/about"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                About
            </Link>
            <Link
                to="/cart"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                Cart
            </Link>
            <Link
                to="/faqs"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                Faqs
            </Link>
            </nav>
            <div className="flex justify-end items-center gap-1">
            <button variant="outline" className="text-sm text-white mx-5 h-10 px-4 py-2 rounded bg-[rgb(96,77,194)]" asChild>
                <Link to="/contacts">CONTACT US</Link>
            </button>
            </div>
        </div>
        </header>
    );
    }

export default Navbar;