import React from 'react';

import '../../index.css';
import Hero from '../../components/Hero';
import Productcards from '../homepage/Productcards'
import Features from '../homepage/Features'
import Blog from '../homepage/Blog'
import Testimonials from '../homepage/Testimonials'
import Cta from '../homepage/Cta-8'






function Homepage() {
  

  return(
  <> 
 
  <Hero />
  <Productcards/>
  <Features/>
  <Blog/>
  <Testimonials/>
  <Cta/>
  
  </>
  );
    
};

export default Homepage;