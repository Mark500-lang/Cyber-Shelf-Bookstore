import React from "react";
import { Link } from "react-router-dom";
import apiClient from "../api";

function Home({books, setBooks, setEditBookId}){
    // const [books, setBooks] = useState([]);

    const handleDelete = (id, name) => {
        apiClient.delete(`/api/books/${id}/`)
            .then(response => {
                setBooks(books.filter(book => book.id !== id));
                alert(`${name} deleted successfully`);
            })
            .catch(error => {
                alert("There was an error deleting the book:", error);
            });
    };
     
    const handleSetEditId = (id) => {
        setEditBookId(id);
    };

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
                    <h6 className="text-2xl">Available Books</h6>
                    <div className='w-full mx-auto gap-4 grid md:grid-cols-4 grid-cols-2 my-10'>
                        {books && books.map(book => {
                            return (
                                <div key={book.id}>
                                    <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                        <div>
                                            <img className="rounded-t-lg w-auto h-80 mx-auto" src={book.img_url} alt="" />    
                                        </div>
                                        <div className="p-5 text-left">
                                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{book.title}</h5>
                                            <p className="mb-2 text-base font-extralight text-gray-700 truncate">{book.description}</p>
                                            <p className="mb-10 text-base font-extralight text-gray-700 truncate">By: {book.author.name}</p>
                                            <p className="mb-10 text-base font-extralight text-gray-700 truncate">KeS {book.price}</p>
                                            <div className="flex flex-row justify-between">
                                                <button href="/rooms" onClick={() => handleDelete(book.id, book.title)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(251,46,1)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                    Delete
                                                </button>
                                                <Link to={`/edit-book/${book.title}`} onClick={() => handleSetEditId(book.id)} className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[rgb(68,85,221)] transition duration-200 ease-in-out hover:bg-[rgb(96,77,194)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                                    Edit
                                                </Link>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home;