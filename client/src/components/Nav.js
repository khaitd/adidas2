import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    
    return(
        <div className="nav">
         
         <div className='nav-line'>
            <NavLink className="nav" to="/"> 
              <img src="https://www.adidas.com/glass/react/039b611/assets/img/icon-adidas-logo.svg"  width="60" height="60"/>

            </NavLink>

            <NavLink  className="nav" to="/mens"> 
               Mens
            </NavLink>
            
            <NavLink  className="nav" to="/womens"> 
                Womens
            </NavLink>

            <NavLink  className="nav-bag" to="/bag"> 
                <img src="https://static.thenounproject.com/png/1093033-200.png" width="35" height="35"/>
            </NavLink>

          
          
       
         </div>

         
       

        </div>
    );
}

export default Nav