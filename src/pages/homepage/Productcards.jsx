import React from 'react';
import {useGetAllProductsQuery} from '../../services/Api'
import {Link} from 'react-router-dom';

const Productcards=()=> {
   const{data ,error,isLoading}
   =useGetAllProductsQuery();
   console.log("API Response:", data);
   console.log("Error:", error);
   console.log("Loading:", isLoading);

  const products =data?.products || [];
    return (
        <>
        <div className="products">
            <div className="product-text">
            <p>Featured Products</p>
            <h2>BESTSELLER PRODUCTS</h2>
            <p>Problems trying to resolve the conflict between</p>
            </div>
            <div className="product-cards">
{isLoading && <div>Loading...</div>}

    {error && <div>Error: {error?.message}</div>} {/* Optional chaining to prevent error when 'error' is undefined */}
                    {!isLoading && !error && products.length === 0 && <div>No products available</div>}
    {Array.isArray(products) && products.map(
        product=>(
            < Link to ={'/products/${id}'}key={product.id} className="product-card">
                <img src={product.images[0]}className="product-image"/>
                <h3>{product.category}</h3>
                <p>{product.brand}</p>
                  <p>${product.price}</p>
                  <p>{product.discountPercentage}</p>


            </Link>
        )
    )
    }
            </div>
            <button>LOAD MORE PRODUCTS</button>
            
        </div>

        </>
    );
};
export default Productcards;