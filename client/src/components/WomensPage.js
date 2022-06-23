import React,{useState, useEffect} from 'react'
import Testcomp from './Testcomp'
import WomensMenu from './WomensMenu'



function WomensPage( ) {

  const [data, setData] = useState([])

  const request = async() => {
    let req = await fetch('/sneakers')
    let res = await req.json()
      setData(res)

  }

  useEffect(() => {
    request()
  }, [])


  return (
      <div> 
         < WomensMenu/>
        <div className="sneaker-grid">
                
                {data.map((e) => {
                    
                        return <Testcomp sneaker={e}/>
                    
                })}
       </div>
    </div>
  );
}

export default WomensPage;
