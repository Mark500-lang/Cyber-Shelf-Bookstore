import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import apiClient from '../api';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BuyBooks({books, setBooks}){

    const navigate = useHistory();

    const [detailedDisplay, setDetailedDisplay] = useState(false);
    const [displayId, setDisplayId] = useState(true);

    const [categories, setCategories] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSetDisplay=(id)=>{
        setDisplayId(id)
        setDetailedDisplay(!detailedDisplay);
    }
    const handleAddToCart=async ( cartAddId, name, event)=>{
        console.log(cartAddId);
        try {
            const response = await apiClient.patch(`/api/books/${cartAddId}/`, 
                { in_cart: true },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                } 
            );
    
            setBooks(books.map(book => book.id === cartAddId ? response.data : book));
            toast.success(`${name} has been added to cart successfully👍`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                });
            setDetailedDisplay(!detailedDisplay);
            // navigate("/cart");
    
        } catch (error) {
            console.error("Error Response:", error.response ? error.response.data : error.message);
            toast.error(`Oops😢! an error has occured ${error.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                });
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const categoriesResponse = await apiClient.get('/api/category');
            setCategories(categoriesResponse.data);
          } catch (error) {
            console.error('Error fetching data', error);
          }
        };
    
        fetchData();
      }, []);
    
      // Filter books based on selected category
      useEffect(() => {
        if (selectedCategory) {
          const filtered = books.filter(book => book.category.id === selectedCategory);
          setFilteredBooks(filtered);
          if(detailedDisplay === true ){
            setDetailedDisplay(!detailedDisplay);
          };
          
        } else {
          setFilteredBooks(books);
        }
      }, [selectedCategory, books, detailedDisplay]);


    return(
        <div className="min-h-screen">
            <ToastContainer className='mt-20'/>
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
                    <div>
                        <label htmlFor="category">Select Category:</label>
                        <select
                        id="category"
                        onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
                        >
                        <option value="">All</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                            {category.name}
                            </option>
                        ))}
                        </select>
                    </div>
                </form>

                <div className="text-center">
                    {
                        !detailedDisplay ?  
                        <>
                        <h6 className="text-2xl">Today's Picks</h6>
                        <div className='w-full mx-auto gap-2 grid md:grid-cols-5 grid-cols-2 my-10'>
                            {filteredBooks && filteredBooks.map(book => {
                                return (
                                    <div key={book.id}>
                                        <div onClick={()=>handleSetDisplay(book.id)} className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                            <div>
                                                <img className="w-auto h-80 mx-auto" src={book.img_url} alt="" />    
                                            </div>
                                        <div className="p-5 text-left">
                                            <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900">{book.title}</h5>
                                            <p className="mb-2 text-sm font-extralight text-gray-700"><span className="font-light">Kes</span> {book.price}</p>
                                            {/* <p className="mb-10 text-sm font-extralight text-gray-700 truncate">{book.description}</p> */}
                                            <div className="flex flex-col justify-between">
                                            <div className="flex justify-between max-w-20">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                                {/* <button onClick={()=>handleSetDisplay(book.id)} className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[rgb(68,85,221)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                    Read More
                                                </button> */}
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
                                            <div onClick={handleSetDisplay} className="max-w-5xl mx-auto gap-4 grid md:grid-cols-2 grid-cols-1 my-10 bg-white rounded-lg shadow-sm transition duration-100 ease-in-out mb-36">
                                                <div>
                                                    <img className="rounded-t-lg w-full h-auto" src={book.img_url} alt="" />
                                                </div>
                                                <div className="p-5 text-left">
                                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{book.title}</h5>
                                                    <p className="text-xl mb-10">KES {book.price}</p>
                                                    <p className="mb-2 text-sm font-extralight text-gray-700">{book.description}</p>
                                                    <p className="mb-2 text-sm font-extralight text-gray-700">Genre: {book.category.name}</p>
                                                    <p className="mb-0"><span className="text-sm font-extralight text-gray-700">{book.author.bio}</span></p>
                                                    <p className="mt-6 text-sm font-extralight text-gray-700">Author: {book.author.name}</p>
                                                    <p className="mt-6 text-sm font-extralight text-gray-700">ISBN: {book.isbn}</p>
                                                    <div className="flex flex-row justify-between mt-10">
                                                        <button className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[rgb(251,46,1)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                            Back
                                                        </button>
                                                        <button onClick={()=>handleAddToCart(book.id, book.title)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[rgb(68,85,221)] text-white transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">                                                           
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                            </svg>
                                                            &nbsp;Add to Cart 
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