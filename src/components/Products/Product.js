import React, {useContext,useState} from 'react'
import {Context} from '../ProductsProvider'
import {Link} from 'react-router-dom'

export default function Product(props) {
    const {id,name,price,storePiece,isAdded,increment}=props.data
    const {addToCart,incrementFunction,buyItNow,decrementFunction}=useContext(Context)

   
   
    const sendToApi1=(name,id,param)=>{
       addToCart(name,id,param)
    }

    const sendToApi2=(id)=>{
        buyItNow(id)
     }

    const  sendToApi3=(index)=>{
        incrementFunction(index)
     }

    const sendToApi4=(index)=>{
      decrementFunction(index)
     }

     
   
    return (
        <div className='container mt-2'>
        <ul className="list-group col-md-6">
            <li className="list-group-item">
               
                {   (isAdded)?
                    (<i class="fa fa-star float-right text-warning fa-2x"></i>)
                    :(null)
                }  
                    {/*name of product*/}
                    <h3>{name}</h3> <br/>
                    {/*price of product*/}
                    <h5 className='text-danger'>price : {price} $</h5>
                    {/*quentité of product*/}
                    <small className='text-secondary'>store piece :{storePiece} item</small><br/>
                    {/*add to cart or buy it now*/}
                    <button className="btn btn-success float-right ml-2" onClick={sendToApi1.bind(this,name,id,props.index)}>add to bag</button>
                    <Link to={'information/'+id} className='btn btn-warning float-right'>buy it now</Link>
                    {/* increment  quentité*/}
                    <small onClick={sendToApi3.bind(this,props.index)}  className="btn btn-secondary mr-2">+</small>
                    {/* decrement  quentité*/}
                    {   
                    (increment>1)?
                    (<small onClick={sendToApi4.bind(this,props.index)} className="btn btn-secondary">-</small>)
                    :(null)
                    } 

                     {/*number of item incremented*/}
                    <small>{increment} item</small>
            </li>
        </ul>
        </div>
    )
}