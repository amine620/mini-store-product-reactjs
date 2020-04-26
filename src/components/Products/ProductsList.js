import React,{useContext} from 'react'
import {Context} from '../ProductsProvider'
import Product from './Product'


export default function ProductsList() {

    const {products}=useContext(Context)
    return (
        <div className=' mt-4'>
            {
               products.map((product,index)=>(
                   <Product  key={index}  data={product} index={index} />
               ))
            }
            
        </div>
    )
}
