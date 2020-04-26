import React,{useContext,useState}  from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../ProductsProvider'

const Navbar=()=>{
  const {number,budget}=useContext(Context)
  


return(
  <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-nav">
      <ul className='d-flex list-unstyled '>
        <li>  <a className="navbar-brand" href="#">My Store</a></li>
        <li><a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a></li>
        <li><Link className="nav-item nav-link" to="/">products</Link></li>
        <li className="align-self-end"><Link className="nav-item nav-link d-flex justify-content-around" to="/items"><i className="fa fa-shopping-cart fa-2x"></i> <h3>({number})</h3> </Link></li>
      </ul>
    </div>
</nav>


<h2 className='text-secondary float-right mr-2'>Total:{budget}$</h2>
  </div>

   
)
}

export default Navbar