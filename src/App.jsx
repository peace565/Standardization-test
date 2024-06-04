
import React from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import './index.css';
import Singleproduct from"./pages/Singleproduct"
import Cart from"./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from './pages/homepage/Homepage'




const App=()=> {
  

  return(
  <> 
  <Router>
   
    <Navbar />
    <Routes>
 <Route  path="/" element= {<Homepage/>} />
 <Route  path="/product/:id"element= {<Singleproduct/>} />
 <Route  path="/Cart"element= {<Cart/>} />
 </Routes>
 <Footer />
 
  </Router>
  </>
  );
    
};

export default App;
