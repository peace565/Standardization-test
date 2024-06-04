import React from 'react'
import { useParams } from 'react-router-dom';
import {useGetProductByIdQuery} from '../services/Api'


import '../index.css';


const Singleproduct=()=> {
    const {id}=useParams();
    const{data,error,isLoading}=
    useGetProductByIdQuery(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error){
        return <div> Error:{error.message}</div>;
    }
    const product =data;
    
    return(
<>
{product ?(
        <div>
       <div className="product-header" >
        <h1>{product.title}</h1>
        <p>{product.description}</p>
       </div>
       <div className="product-content">
        <div className="product-images">
            <img src={product.thumbnail}/>
        </div>
        <div  className="product-details">
           <h2>Details</h2> 
           <p>Price: ${product.price}</p>
           <p>Brand: {product.brand}</p>
        </div>
        <div/>
        <div className="product-specifications">
            <h2>Specifications</h2>
        </div>
        <div className="product-reviews">
        <h2>Reviews</h2>
        <p>{product.review}</p>
        </div>
        </div>
       </div>
       ):(
        <p>No product found</p>
       )
       }

</>
    );
    };
    export default Singleproduct;





   