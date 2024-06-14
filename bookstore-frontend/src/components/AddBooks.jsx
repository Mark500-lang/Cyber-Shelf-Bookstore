import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

function AddBooks(){
    axios.defaults.withCredentials = true;

    const [books, setBooks] = useState();

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
        <>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                   Add a book
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="title"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="author"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="publisher"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Publisher
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="isbn"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            ISBN
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="category"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="year_of_publishing"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Year of publishing
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="description"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Description
                        </label>
                        <textarea
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

</>
    )
}

export default AddBooks;