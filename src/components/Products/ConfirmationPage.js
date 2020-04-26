import React,{useState,useContext,} from 'react'
import {Context} from '../ProductsProvider'
import {Link} from 'react-router-dom'

 const ConfirmationPage=(props)=>{

     const {products}=useContext(Context)
     const id=props.match.params.id


    return(
        <div className="container">
            <h1 className='text-secondary'>Details</h1>
            <div className="row">
                <div className="col-md-6 offset-3">
           {
             products.filter(product=>product.id==id)
             .map(information=>(
        <ul class="list-group">
           <li class="list-group-item"> <strong>name of item : </strong> {information.name} </li>
           <li class="list-group-item text-danger"> <strong>price : </strong> {information.price} $ </li>
           <li class="list-group-item"> <strong>items number :</strong>  {information.increment}</li>
             <li class="list-group-item"> <strong>tracking number:</strong> {information.id*123456789+'JHDYTR65DHJKKSH77Y76GDJ'}</li>
             <Link className='btn btn-success float-center'>confirm now</Link>
        </ul>
             ))
             

        
           }
                </div>
            </div>
        </div>
     
    )
}
export default ConfirmationPage