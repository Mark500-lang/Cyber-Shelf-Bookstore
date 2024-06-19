import React, { useState, useEffect } from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import axios from "axios";
import Common from "./components/Common";
import Home from './components/Home';
import About from './components/About';
import Faqs from './components/Faqs';
import Contacts from './components/Contacts';
import AddBooks from './components/AddBooks';
import EditBook from './components/EditBook';

function App() {
  // const [children, setChildren] = useState();
  // const [infants, setInfants] = useState();
  const [books, setBooks] = useState([]);
  //set Id to load data on selected book for editing
  const [editBookId, setEditBookId] = useState();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/books')
        .then(response => {
            setBooks(response.data);
            console.log(response.data); 
        })
        .catch(error => {
            console.error("There was an error making the request:", error);
        });
}, []);

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Common/>}>
          <Route index element={<Home books={books} setBooks={setBooks} setEditBookId={setEditBookId}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/add-book" element={<AddBooks books={books} setBooks={setBooks}/>}/>
          <Route path="/edit-book/:id" element={<EditBook books={books} setBooks={setBooks} editBookId={editBookId}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;