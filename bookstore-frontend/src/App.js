import React, { useState } from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import Home from './components/Home';
import About from './components/About';
import Faqs from './components/Faqs';
import Contacts from './components/Contacts';
function App() {
  // const [children, setChildren] = useState();
  // const [infants, setInfants] = useState();

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Common/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;