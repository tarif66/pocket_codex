import React, { FunctionComponent, useState, useEffect } from 'react'
import Fec from './models/fec'
import FECS from './models/mock-fec'


const App: FunctionComponent = () => {
  const [fecs, setFecs] = useState<Fec[]> ([]) 

  useEffect(() => {
    setFecs(FECS);
}, []);  
  
  

  return (
    <div>
      <h1>Pocket Codex!</h1>
      <p>here are my {fecs.length} FECs</p>
    </div>
  )
}

export default App;


