import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import 'flowbite';
function BuyBooks({books, setBooks}){

    const navigate = useNavigate();
    const [formData] = useState({
        in_cart: true
    });

    const [detailedDisplay, setDetailedDisplay] = useState(false);
    const [displayId, setDisplayId] = useState();

    const handleSetDisplay=(id)=>{
        setDisplayId(id)
        setDetailedDisplay(!detailedDisplay);
    }
    const handleAddToCart=async ( cartAddId, name, event)=>{
        console.log(cartAddId);
        try {
            const response = await axios.patch(`http://127.0.0.1:8000/api/books/${cartAddId}/`, 
                { in_cart: true },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                } 
            );
    
            setBooks(books.map(book => book.id === cartAddId ? response.data : book));
            alert(`${name} has been added to cart successfully👍`);
            // setDetailedDisplay(!detailedDisplay);
            navigate("/cart");
    
        } catch (error) {
            console.error("Error Response:", error.response ? error.response.data : error.message);
            alert(`Oops😢! an error has occured ${error.message}`);
        }
    }

    return(
        <div className="min-h-max">
            {/* <div className='bg-blue-900'>
                <img src="./assets/image9.jpg" alt="home" className="w-full opacity-80 h-[40rem] bg-blend-multiply bg-black-900"/>
                <div className="container flex font-bold  flex-col mx-auto max-w-7xl left-0 right-0 items-center justify-center p-5 absolute top-[40%] ">
                    <h1 className="text-white text-4xl/tight sm:text-5xl/tight lg:text-5xl/tight xl:text-6xl/tight ">
                    Welcome to Cyber Shelf
                    </h1>
                    <h4 className= "text-white sm:text-md/tight lg:text-2xl/tight xl:text-4xl/tight pt-5">
                    Information just a click away...
                    </h4>    
                </div>
            </div> */}
            <div className="container flex flex-col mt-20 mb-10">

                <form class="max-w-xl mx-auto mb-16">
                    <div class="flex">
                        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg></button>
                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Mockups</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Templates</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Design</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Logos</button>
                            </li>
                            </ul>
                        </div>
                        <div class="relative w-full">
                            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search " required />
                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                <div className="text-center">
                    {
                        !detailedDisplay ?  
                        <>
                        <h6 className="text-2xl">Today's Picks</h6>
                        <div className='w-full mx-auto gap-4 grid md:grid-cols-4 grid-cols-2 my-10'>
                            {books && books.map(book => {
                                return (
                                    <div key={book.id}>
                                        <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                            <div>
                                                <img className="rounded-t-lg w-auto h-80 mx-auto" src={book.img_url} alt="" />    
                                            </div>
                                        <div className="p-5 text-left">
                                            <h5 className="mb-2 text-l font-semibold tracking-tight text-gray-900">{book.title}</h5>
                                            <p className="mb-2 text-base font-extralight text-gray-700">Price: {book.price}</p>
                                            <p className="mb-10 text-base font-extralight text-gray-700 truncate">{book.description}</p>
                                            <div className="flex flex-row justify-between">
                                                <button onClick={()=>handleSetDisplay(book.id)} className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[rgb(68,85,221)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                    Read More
                                                </button>
                                            </div>
                                                
                                        </div>
                                    </div>
                                    </div>
                                );
                            })}
                        </div>
                        </>
                        :
                        <div>
                            {books && books.find(book => book.id === displayId) && (
                                books.map(book => (
                                    book.id === displayId && (
                                        <div key={book.id}>
                                            <div className="max-w-5xl mx-auto gap-4 grid md:grid-cols-2 grid-cols-1 my-10 bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                                <div>
                                                    <img className="rounded-t-lg w-2/4 h-auto" src={book.img_url} alt="" />
                                                </div>
                                                <div className="p-5 text-left">
                                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{book.title}</h5>
                                                    <p className="mb-2 text-base font-extralight text-gray-700">{book.description}</p>
                                                    <p className="mb-2 text-base font-extralight text-gray-700">By: {book.author.name}</p>
                                                    <p className="mb-2 text-base font-extralight text-gray-700">Genre: {book.category.name}</p>
                                                    <p className="mb-12">About the author: <span className="text-base font-extralight text-gray-700">{book.author.bio}</span></p>
                                                    <div className="flex flex-row justify-between">
                                                        <button onClick={handleSetDisplay} className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[rgb(68,85,221)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                            Back
                                                        </button>
                                                        <button onClick={()=>handleAddToCart(book.id, book.title)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(251,46,1)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))
                            )}
                        </div>
                    }         
                </div>
            </div>
        </div>
    )
}

export default BuyBooks;