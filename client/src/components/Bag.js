import Testcomp from './Testcomp'
import React, {useState, useEffect} from 'react';



function Bag({orders, sneakers} ) {

    // get a list of all the sneaker colors from backend.. do a .map and render them in a small carousel
    // with display none unless there is a hover



    let [at, setAt] = useState([])


    const request = async() => {
      let req = await fetch(`/sneakers/${orders[0] ? orders[0].sneaker_id : 1 }`)
      let res = await req.json()
      setAt(res)
     
    }
   
    useEffect(() => {
      request()
      
    }, [])


 
   return (
   
     <div className="sneaker-menu">
        <h2>YOUR BAG </h2>

 
        <p> THE SNEAKER IN YOUR BAG IS:{ at.name } </p> 

        <img src={at.img} height="500px"/>

 
        <p> PRICE: {at.price} </p>

        <button>CHECKOUT</button>
        {/* {sneakers.map((e) => {
                if (e.id == orders[0].sneaker_id){
                  return <img src={e.img} height="500px"/>
                }})  
        } */}
        {/* {sneakers.map((e) => {
                
                  return <img src={e.img}/>
        }  )
        } */}
        
      </div>
   );
 }
 
 export default Bag;
 

 