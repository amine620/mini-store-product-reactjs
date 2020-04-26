import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import {ProductsProvider} from './components/ProductsProvider'
import ProductsList from './components/Products/ProductsList'
import ItemsCart from './components/Products/ItemsCart'
import ConfirmationPage from './components/Products/ConfirmationPage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

function App() {

  return (
    <div className="App">
     <ProductsProvider>
       <Router>
       <Navbar/>
         <Switch>
           <Route exact path='/' component={ProductsList}/>
           <Route exact path='/items' component={ItemsCart}/>
           <Route exact path='/information/:id' component={ConfirmationPage}/>
         </Switch>
       </Router>
        
     </ProductsProvider>
    </div>
  );
}

export default App;
