import React,{useContext} from 'react'
import {Context} from '../ProductsProvider'
import {Link} from 'react-router-dom'


export default function ItemsCart() {

    const {items,deleteItem,buyItNow}=useContext(Context)

    const sendToApi1=(id,param)=>{
        deleteItem(id,param)
    }
    const sendToApi2=(id)=>{
        buyItNow(id)
    }
    return (
        <div className='container'>
            <h1 className='text-secondary'>My bag</h1>
             <ul className="list-group col-md-6 mt-4">
            {
                items.map((item,index)=>(
                   
                <li key={item.id} class="list-group-item">{item.name}
                <button onClick={sendToApi1.bind(this,item.id,index)} className="btn btn-danger float-right">remove from bag</button>
                <Link to={'information/'+item.id} className='btn btn-warning float-right mr-2'>buy it now</Link>
                </li>
                  
                ))
            }  
            </ul>
        </div>
    )
}
