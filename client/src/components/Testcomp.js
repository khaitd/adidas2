import React from 'react'
import SneakerMenu from './SneakerMenu';



function Testcomp({sneaker, setTheId, theId}) {

    // const [image, setImage] = useState({img: `${sneaker.img}` })

    function sneaker_menu_add(e) {
        
        e.currentTarget.src = `${sneaker.top_img}`
       return  <SneakerMenu sn={sneaker}/>


    }
  

    function test(num){
        setTheId(num)
        console.log(theId)
    }

  return (
    <div >
   
         {/* <img  src={sneaker.img} onMouseOver={e => (e.currentTarget.src = `${sneaker.top_img}`)} onMouseOut={(e) => {e.currentTarget.src = `${sneaker.img}`}} className="sneaker-img"  /> */}
             
         <a href={`http://localhost:4000/mens/${sneaker.id}`}>     
            {/* <img  src={sneaker.img} onMouseOver={e => sneaker_menu_add(e)} onMouseOut={(e) => {e.currentTarget.src = `${sneaker.img}`}} onClick={() => {setTheID(sneaker.id)}}    className="sneaker-img" /> */}
        
            <img  src={sneaker.img} onMouseOver={e => sneaker_menu_add(e)} onMouseOut={(e) => {e.currentTarget.src = `${sneaker.img}`}}       className="sneaker-img" />

         </a>




 
        <SneakerMenu sneaker={sneaker}/>
        <div> {sneaker.name}</div> 
        <div className="sneaker-price"> {sneaker.price}</div> 
    </div>
  );
}

export default Testcomp;
