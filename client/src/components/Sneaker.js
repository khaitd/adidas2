 import { useParams } from "react-router-dom";
import React,{useState, useEffect} from 'react'



function Sneaker({sneakerId, setOrder}) {


  const params = useParams();
  console.log(params.theId);


  const [sneak, setSneak] = useState()

  const request = async() => {
    let req = await fetch(`/sneakers/${params.theId}`)
    let res = await req.json()
      setSneak(res)

  }

  useEffect(() => {
    request()
  }, [])
  


  function handleUpdateOrder() {
     
    fetch("/orders/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sneaker_id: params.theId, }),
    })
    .then((response) => response.json())
  .then((json) => console.log(json));
    
  }




  return (
    <div className="mens-menu">
        
        <div className="main-sneaker-display"> 
             <img className="sneaker" src={`${(sneak ? sneak.img : "none")}`} height="500px" width="500px" />
                <div> 
                    <h2 className="sneaker"> {sneak ? sneak.name : ""}</h2>
                    <h2 className="sneaker">Price: {sneak ? sneak.price : ""}</h2>
                    {/* <button className="sneaker" onClick={console.log("YOOOOOOOO!!!")} >ADD TO BAG</button> */}
                
                    
                    <form className="new-poem-form" onSubmit={handleUpdateOrder }>


                            <input type="submit" value="ADD TO BAG" />

                   </form>
                
                
                 </div>
        </div>
     

    </div>
  );
}

export default Sneaker;
