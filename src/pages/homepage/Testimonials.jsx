import React from 'react'

const Testimonials=()=> {
   
  
    return (
        <>
        <div className="testimonials">
        <div className="Testimonial">
            <div className="About">
        <div className="about-us">
            <h3>What they say about us</h3>
            <div className="about-images">
            <img className="picture" src="/images/picture.png"/>
            <img src="/images/stars.png"/>
            </div>
            <div className="details">
                <p>Slate helps you see how many more days you need to work to<br/>
                reach your financial goal.</p>
                <div className="name">
                    <h3>Regina Miles</h3>
                    <h3>Designer</h3>
                </div>
            </div>

        </div> 
        <div className="grid">
            <img src="/images/grid.png"/>
        </div>
        </div>
        </div>
        </div>
        </>
    );
};
export default Testimonials;