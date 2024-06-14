import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

function Home({books}){
    // const [books, setBooks] = useState();

    // useEffect(()=>{
    //     axios.get('http://127.0.0.1:8000/api/books')
    //     .then(response => {
    //         setBooks(response.data);
    //         console.log(response.data)
    // })
    // .catch(error => {
    //     alert(error);
    // })
    // })


    return(
        <div className="min-h-max">
            <div className='bg-orange-900'>
                <img src="./assets/image9.jpg" alt="home" className="w-full opacity-80 h-[40rem] bg-blend-multiply bg-black-900"/>
                <div className="container flex font-bold  flex-col mx-auto max-w-7xl left-0 right-0 items-center justify-center p-5 absolute top-[40%] ">
                    <h1 className="text-white text-4xl/tight sm:text-5xl/tight lg:text-5xl/tight xl:text-6xl/tight ">
                    Welcome to Cyber Shelf
                    </h1>
                    <h4 className= "text-white sm:text-md/tight lg:text-2xl/tight xl:text-4xl/tight pt-5">
                    Information just a click away...
                    </h4>    
                </div>
                
            </div>
            <div className="container flex flex-col mt-40 mb-10">
                <div className="text-center">
                    <h6 className="text-2xl">Today's Picks</h6>
                    <div className='w-full mx-auto gap-4 grid md:grid-cols-4 grid-cols-2 my-10'>
                        {books && books.map(book => {
                            return (
                                <div key={book.id}>
                                <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                    <img className="rounded-t-lg" src="./assets/image8.jpg" alt="" />
                                <div className="p-5 text-left">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{book.title}</h5>
                                    <p className="mb-10 text-base text-gray-700">Relax in our well-appointed rooms and suites, designed to provide comfort while reflecting the lodge’s natural surroundings.</p>
                                    <a href="/rooms" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(159,19,19)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            </div>
                            );
                        })}

                            

                            <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                    <img className="rounded-t-lg" src="./assets/image13.jpg" alt="" />
                                <div className="p-5 text-left">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Gourmet Dining</h5>
                                    <p className="mb-10 text-base text-gray-700">Enjoy delicious meals crafted from fresh, local ingredients at our on-site restaurant, offering a taste of Nairobi’s culinary delights.</p>
                                    <a href="/wine&dine" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(159,19,19)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                    <img className="rounded-t-lg" src="./assets/image14.jpg" alt="" />
                                <div className="p-5 text-left">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Outdoor Adventures</h5>
                                    <p className="mb-10 text-base text-gray-700">Explore scenic trails, enjoy a safari in the city's national reserve, or simply unwind by our cozy fireplace.</p>
                                    <a href="/wine&dine" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(159,19,19)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                    <img className="rounded-t-lg" src="./assets/image5.jpg" alt="" />
                                <div className="p-5 text-left">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">City Convenience</h5>
                                    <p className="mb-10 text-base text-gray-700">Experience the best of both worlds with our serene location and easy access to Nairobi’s vibrant attractions, cultural sites, and shopping destinations.</p>
                                    <a href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(159,19,19)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home;