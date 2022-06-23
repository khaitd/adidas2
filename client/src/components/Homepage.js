import React,{useState, useEffect} from 'react'
import Testcomp from './Testcomp'
import Mensmenu from './Mensmenu'



function Homepage({setTheId, theId} ) {

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
          <Mensmenu/>
        <div className="sneaker-grid">
                
                {data.map((e) => {
                    
                        return <Testcomp sneaker={e} setTheId={setTheId} theId={theId}/>
                    
                })}
       </div>
    </div>
  );
}

export default Homepage;
