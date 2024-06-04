import React from 'react'


const Navbar=()=> {
    return (
       <>
       <div className="container">
        <header>
           <div className="col-1">
            <img className="phone" src="/icons/phone-icon.png"/>
            <p>(225)555-018</p>
            </div>
            <div className="col-2"> 
                <img className="email"src="/icons/email-icon.png"/>
                <p>michellereivera@gmail.com </p>
                </div >

             <p>follow us and get a chance to win 80% off</p>
            <div className="col-3">
               
                <img src=""/>
                <img src=""/>
                <img src=""/>
                <img src=""/>
            </div>
            

        </header>

        <nav>
            <p>Bandage</p>
            <li className="nav-list">
                <ul>Home</ul>
                <ul>Shop</ul>
                <ul>About</ul>
                <ul>Blog</ul>
                <ul>Pages</ul>
            </li>
            <div className="col-4">
               <p>Login/Register</p> 
                <img/>
                <img/>
                <img/>
                <img/>
            </div>


        </nav>
        </div>
        </>
    );
};
export default Navbar;