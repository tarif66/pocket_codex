import React, { FunctionComponent, useState, useEffect } from 'react'
import Fec from './models/fec';
import FECS from './models/mock-fec';




const App: FunctionComponent = () => {
  const [fecs, setFecs] = useState<Fec[]> ([]) 

  useEffect(() => {
    setFecs(FECS);
}, []);  
  
  
  return (
    <div>
      <h1 className="center">Pocket Codex!</h1>
      <div className="container">
        <div className="row">
        {fecs.map(({id, name, picture})=> (
          <div className="col s6 m4" key={id}>
            <div className="card horizontal">
              <div className="card-image">
                <img src={picture} alt={name}/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{name}</p>
                </div>
              </div>
            </div>
          </div>  
        ))} </div>
      </div>
    </div>)
}

export default App;

 
