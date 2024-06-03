
import React from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import './index.css';
import Singleproduct from"./pages/Singleproduct"
import Cart from"./pages/Cart"

import Homepage from './pages/homepage/Homepage'




const App=()=> {
  

  return(
  <> 
  <Router>
    <Routes>
 <Route  path="/" element= {<Homepage/>} />
 <Route  path="/Singleproduct"component= {Singleproduct} />
 <Route  path="/Cart"component= {Cart} />
 </Routes>
  </Router>
  </>
  );
    
};

export default App;
