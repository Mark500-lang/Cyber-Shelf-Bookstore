import React, { useState } from "react";
import apiClient from '../api';

function AddBooks({books, setBooks}){
    // axios.defaults.withCredentials = true;

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await apiClient.post('/api/create-book/', 
                JSON.stringify(formData), 
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }
            );
    
            if (response.status !== 201) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            setBooks([...books, response.data]);
            setFormData({
                author: '',
                category: '',
                title: '',
                publisher: '',
                description: '',
                language: 'English',
                likes: 0,
                price: 500,
                year_of_publishing: '',
                isbn: '',
                img_url: '',
                sold_on_credit: true,
            });
            alert('Book added successfully👍');
            console.log("Response Data:", response.data);
    
        } catch (error) {
            console.error("Error Response:", error.response ? error.response.data : error.message);
            alert(`Oops😢! An error occured adding the book: ${error.response ? error.response.data : error.message}`);
        }
    };


    return(
        <>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                   Add a book
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
                            name="img-url"
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

export default AddBooks;