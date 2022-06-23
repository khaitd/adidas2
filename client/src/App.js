import React, {useState, useEffect} from 'react';
import Homepage from './components/Homepage.js'
import StartPage from './components/StartPage.js'
import WomensPage from './components/WomensPage.js'
import WomensMenu from './components/WomensMenu.js'
import Sneaker from './components/Sneaker.js'
import Nav from './components/Nav';
import Bag from './components/Bag';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

function App() {

 let [theId, setTheId] = useState([])

 let [order, setOrder] = useState([])

 let [snk, setSnk] = useState([])


 const request = async() => {
   let req = await fetch(`/orders`)
   let res = await req.json()
   setOrder(res)
  
 }

 useEffect(() => {
   request()
   
 }, [])
 
 const request2 = async() => {
  let req = await fetch(`/sneakers`)
  let res = await req.json()
  setSnk(res)
 
}

useEffect(() => {
  request2()
  
}, [])





  return (
    <div >
     
   

       <Nav/>
             
            <Switch>
                <Route exact path="/"> 
                  <StartPage />
                </Route>

              <Route exact path="/mens"> 
                <Homepage setTheId={setTheId} theId={theId}/>
              </Route>
              
              <Route exact path="/womens"> 
                
                <WomensPage />
              </Route>

              <Route   path={`/mens/:theId`}> 
            
                <Sneaker sneakerId={theId} setOrder={setOrder} />
              </Route>

              <Route exact path="/bag"> 
                
                <Bag orders={order} sneakers={snk}/>
              </Route>

              
             
            </Switch>

    </div>

  );
}

export default App;
