import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BuyBooks({books, setBooks}){
    // const [books, setBooks] = useState([]);
    const [detailedDisplay, setDetailedDisplay] = useState(false);
    const [displayId, setDisplayId] = useState();

    const handleDelete = (id, name) => {
        axios.delete(`http://127.0.0.1:8000/api/books/${id}/`)
            .then(response => {
                setBooks(books.filter(book => book.id !== id));
                alert(`${name} deleted successfully`);
            })
            .catch(error => {
                alert("There was an error deleting the book:", error);
            });
    };
const handleSetDisplay=(id)=>{
    setDisplayId(id)
    setDetailedDisplay(!detailedDisplay);
}
const handleAddToCart=(name)=>{
    alert(`${name} added to cart`);
    setDetailedDisplay(!detailedDisplay);
}
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
                    {
                        !detailedDisplay ?  
                        <>
                        <h6 className="text-2xl">Today's Picks</h6>
                        <div className='w-full mx-auto gap-4 grid md:grid-cols-4 grid-cols-2 my-10'>
                            {books && books.map(book => {
                                return (
                                    <div key={book.id}>
                                    <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                        <img className="rounded-t-lg" src="https://m.media-amazon.com/images/I/71-++hbbERL._AC_UF894,1000_QL80_.jpg" alt="" />
                                    <div className="p-5 text-left">
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{book.title}</h5>
                                        <p className="mb-2 text-base font-extralight text-gray-700 truncate">{book.description}</p>
                                        <p className="mb-2 text-base font-extralight text-gray-700 truncate">Year: {book.year_of_publishing}</p>
                                        <p className="mb-2 text-base font-extralight text-gray-700 truncate">By: {book.author.name}</p>
                                        <p className="mb-10 text-base font-extralight text-gray-700">Genre: {book.category.name}</p>
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
                                            <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                                <img className="rounded-t-lg" src="https://m.media-amazon.com/images/I/71-++hbbERL._AC_UF894,1000_QL80_.jpg" alt="" />
                                                <div className="p-5 text-left">
                                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{book.title}</h5>
                                                    <p className="mb-2 text-base font-extralight text-gray-700">{book.description}</p>
                                                    <p className="mb-2 text-base font-extralight text-gray-700">By: {book.author.name}</p>
                                                    <p className="mb-2 text-base font-extralight text-gray-700">Genre: {book.category.name}</p>
                                                    <p className="mb-12">About the author: <span className="text-base font-extralight text-gray-700">{book.author.bio}</span></p>
                                                    <div className="flex flex-row justify-between">
                                                        <button onClick={handleSetDisplay} className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[rgb(68,85,221)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                            back
                                                        </button>
                                                        <button onClick={()=>handleAddToCart(book.title)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(251,46,1)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                            add to cart
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