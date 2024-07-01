import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function EditBook({books, setBooks, editBookId}){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        author: 1,
        category: 1,
        title: '',
        publisher: '',
        description: '',
        language: 'English',
        likes: 10,
        price: 500,
        year_of_publishing: "",
        isbn: '',
        img_url: 'https://m.media-amazon.com/images/I/71-++hbbERL._AC_UF894,1000_QL80_.jpg',
        sold_on_credit: true,
    });

    const editFetchedBook = async () => {
        try {
            // Fetch data from the API
            const response = await fetch(`http://127.0.0.1:8000/api/books/${editBookId}/`);

            // Check if the response is OK
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const data = await response.json();

            // Update formData with fetched data
            setFormData({
                author: data.author || '',
                category: data.category || '',
                title: data.title || '',
                publisher: data.publisher || '',
                description: data.description || '',
                language: data.language || 'English',
                likes: data.likes || 0,
                price: data.price || '',
                year_of_publishing: data.year_of_publishing || '',
                isbn: data.isbn || '',
                img_url: data.img_url || '',
                sold_on_credit: data.sold_on_credit || false,
            });
        } catch (error) {
            // Handle errors
            console.error('Error fetching books:', error);
            alert('Oops! an error occured when fetching the book',error.message);
        }
    };

    useEffect(() => {
        editFetchedBook();
    }, []);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        console.log("Submitting Data:", formData);
    
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/books/${editBookId}/`, 
                JSON.stringify(formData),
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                } 
            );
    
            setBooks(books.map(book => book.id === editBookId ? response.data : book));
            alert('Book edited successfully👍');
            navigate("/");
    
        } catch (error) {
            console.error("Error Response:", error.response ? error.response.data : error.message);
            alert(`Oops😢! an error occured while editing the book ${error.response ? error.response.data : error.message}`);
        }
    };


    return(
        <>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                   Edit a book
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="title"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={formData.title}
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
                            name="author"
                            onChange={handleChange}
                            value={formData.author}
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
                            name="publisher"
                            onChange={handleChange}
                            value={formData.publisher}
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
                            name="category"
                            onChange={handleChange}
                            value={formData.category}
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
                            name="isbn"
                            onChange={handleChange}
                            value={formData.isbn}
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
                            name="year_of_publishing"
                            onChange={handleChange}
                            value={formData.year_of_publishing}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="year_of_publishing"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Cover image URL
                        </label>
                        <input
                            type="text"
                            name="img_url"
                            onChange={handleChange}
                            value={formData.img_url}
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
                            name="description"
                            onChange={handleChange}
                            value={formData.description}
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

export default EditBook;