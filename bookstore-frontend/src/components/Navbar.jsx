import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useScrollListener from "./hooks/useScrollListener";
import './Navbar.css';
import jwt_decode from "jwt-decode"
import AuthContext from '../context/AuthContext'

function Navbar() {
    const [navClassList, setNavClassList] = useState([]);
    const {user, logoutUser} = useContext(AuthContext)

    //obtain token to check login
    const token = localStorage.getItem("authTokens")

    if (token){
        const decoded = jwt_decode(token) 
        var user_id = decoded.user_id
    }

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
            <Link
                to="/contacts"
                className="nav-link lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(96,77,194)] hover:text-white"
            >
                Contact Us
            </Link>
            </nav>
            <div className="flex justify-end items-center gap-1">

            {token !== null ? 
              <>
                <Link to="/profile">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </Link>
                <button onClick={logoutUser} variant="outline" className="text-sm text-white mx-5 h-10 px-4 py-2 rounded bg-[rgb(96,77,194)]" asChild>
                    Logout
                </button>
              </>

                :

                <Link to="/login">
                <button variant="outline" className="text-sm text-white mx-5 h-10 px-4 py-2 rounded bg-[rgb(96,77,194)]" asChild>
                    Login
                </button>
                </Link>
            }    
            
            </div>
        </div>
        </header>
    );
    }

export default Navbar;