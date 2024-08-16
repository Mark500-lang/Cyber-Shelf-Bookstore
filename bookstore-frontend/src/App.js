import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Common from "./components/Common";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from './components/Home';
import About from './components/About';
import Faqs from './components/Faqs';
import Contacts from './components/Contacts';
// import AddBooks from './components/AddBooks';
// import EditBook from './components/EditBook';
import BuyBooks from './components/BuyBooks';
import Cart from './components/Cart';
import AllBooks from './components/AllBooks';
import apiClient from './api';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // const [children, setChildren] = useState();
  // const [infants, setInfants] = useState();
  const [books, setBooks] = useState([]);
  //set Id to load data on selected book for editing

  useEffect(() => {
    apiClient.get('/api/books')
        .then(response => {
            setBooks(response.data);
            console.log(response.data); 
        })
        .catch(error => {
            console.error("There was an error making the request:", error);
        });
}, []);

  return (
    <div className=''>
    <BrowserRouter>
      <AuthProvider>
      <Common/>
        <Switch >
          {/* <Route path='/' element={<Common/>}> */}
            {/* <Route index element={<Home books={books} setBooks={setBooks} setEditBookId={setEditBookId}/>}/> */}
          <Route exact path="/" component={() => <BuyBooks books={books} setBooks={setBooks} />}/> {/* Use component prop */}
          <Route path="/about" component={About}/>
          <Route path="/faqs" component={Faqs}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/cart" component={() => <Cart books={books} setBooks={setBooks} />}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          {/* </Route> */}
        </Switch>
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;