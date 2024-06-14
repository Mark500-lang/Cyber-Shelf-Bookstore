import React, { useState, useEffect } from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import axios from "axios";
import Common from "./components/Common";
import Home from './components/Home';
import About from './components/About';
import Faqs from './components/Faqs';
import Contacts from './components/Contacts';
import AddBooks from './components/AddBooks';
function App() {
  // const [children, setChildren] = useState();
  // const [infants, setInfants] = useState();
  const [books, setBooks] = useState();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/books')
        .then(response => {
            setBooks(response.data);
            console.log(response.data);
        })
        .catch(error => {
            alert(error);
            console.error("There was an error making the request:", error);
        });
}, []);

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Common/>}>
          <Route index element={<Home/>} books={books}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/add-book" element={<AddBooks/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;