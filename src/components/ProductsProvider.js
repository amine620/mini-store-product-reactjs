import React,{createContext,useState} from 'react'

export const Context=createContext()


export  const ProductsProvider=(props)=>{

    

     //// this is our state   
    const [products,setProducts]=useState(
       [ {id:1,name:'macbook pro',price:10,storePiece:300,increment:1,isAdded:false},
        {id:2,name:'iphone X',price:10,storePiece:100,increment:1,isAdded:false},
        {id:3,name:'ps4',price:10,storePiece:70,increment:1,isAdded:false},
        {id:4,name:'xbox one',price:10,storePiece:55,increment:1,isAdded:false},
        {id:5,name:'samsung galaxy s8',price:10,increment:1,storePiece:20,isAdded:false},
    ]
        ) 
    const [items,setitems]=useState([])
    const [budget,setbudget]=useState(0)

    const number=items.length///get lenght of items

/////////recieve name and id from product.js component
// and add it in new array state and add price to total budget
    const addToCart=(name,id,param)=>{
        products.forEach(el=>{
            if(el.id==id)
            {
                setbudget(budget+el.price)
            }
           
        })
        const newchange=[...products]
        newchange[param].isAdded=true
        setProducts(newchange)
       
            setitems([...items,{
            id:id,
            name:name
                }])
    }  

///////increment item///////
    const incrementFunction=(index)=>{
        const newValueIncremented=[...products]
        newValueIncremented[index].increment+=1
        setProducts(newValueIncremented)
    }
/////////decrement items////////    
    const decrementFunction=(index)=>{
        const newValueIncremented=[...products]
        newValueIncremented[index].increment-=1
        setProducts(newValueIncremented)
    }
////////////delete item from bag and make isadded false to hide star icon ///////
    const deleteItem=(id,param)=>{
        products.forEach((product,index)=>{
            if(product.id==id)
            {
               const change=[...products]
               change[index].isAdded=false
               setProducts(change)
               setbudget(budget-product.price)
               
            }
        })
      setitems(items.filter(item=> item.id!=id))

    }
    
       

  return (
    <Context.Provider value={{
        products,
        items,
        addToCart,
        deleteItem,
        incrementFunction,
        decrementFunction,
        number,
        budget

        }}>

   {   props.children}

    </Context.Provider>
        )
}

