import React from 'react'
import { useParams } from 'react-router-dom';
import {useGetProductByIdQuery} from '../../services/Api'


const Singleproduct=()=> {
    const {id}=useParams();
    const{data,error,isLoading}=
    useGetProductByidQuery(id);
    
    return (
       <>
       </>
       );
    };
    export default Singleproduct;