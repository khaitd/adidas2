import React from 'react'

function StartPage(  ) {

   // get a list of all the sneaker colors from backend.. do a .map and render them in a small carousel
   // with display none unless there is a hover
  return (
<div> 
    <div className='startpage-container'> 
        <div className='shop-buttons'> 
             {/* <button  className='button' type="button">SHOP MEN</button> */}
              

            <a href="http://localhost:4000/mens" className="button">SHOP MEN</a>

            <a href="http://localhost:4000/womens" className="button">SHOP WOMEN</a>



             {/* <button className='button' type="button">SHOP WOMEN</button> */}
        </div>
        <div className="sneaker-menu">
           <img className='startpage-pic' src='https://images.alphacoders.com/211/211271.jpg' />  
        </div>
     </div> 
</div>     
  );
}

export default StartPage;
