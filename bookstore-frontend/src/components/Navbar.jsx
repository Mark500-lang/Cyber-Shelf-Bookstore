import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <header
                className="p-2 sticky top-0 w-full transition-all duration-1000 ease-in-out transform header" style={{ zIndex: "9999999" }}>
                <div className="container mx-auto flex flex-row flex-wrap p-2 md:justify-normal justify-between items-center bg-[rgb(255,206,44)]  rounded-xl border border-slate-300">
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
                        {/* <div class="items-center hidden gap-x-2 lg:flex">
                            <div class="relative flex w-full gap-2 md:w-max">
                                <div class="relative h-10 w-full  min-w-[288px]">
                                <input type="search" placeholder="Search"
                                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <label
                                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                                </div>
                                <div class="!absolute left-3 top-[13px]">
                                <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                                    fill="#CFD8DC"></path>
                                    <path
                                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                                    stroke="#CFD8DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </div>
                            </div>
                            <button
                                class="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                Search
                            </button>
                        </div> */}
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