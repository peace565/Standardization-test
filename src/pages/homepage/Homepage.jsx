import React from 'react';
import Navbar from '../../components/Navbar';
import '../../index.css';
import Hero from '../../components/Hero';
import Productcards from '../homepage/Productcards'
import Features from '../homepage/Features'
import Blog from '../homepage/Blog'
import Testimonials from '../homepage/Testimonials'





function Homepage() {
  

  return(
  <> 
  <Navbar />
  <Hero />
  <Productcards/>
  <Features/>
  <Blog/>
  <Testimonials/>
  </>
  );
    
};

export default Homepage;