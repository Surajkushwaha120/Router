import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate();
  function ClickHandler(){
    navigate("/labs");
  }
  function backHandler(){
    navigate(-1)
  }
  return (
    <div>
    <div>
         This is Support Page 
    </div>
     <button onClick={ClickHandler}>Move to Labs</button>
     <button onClick={backHandler}>Go Back</button>

    </div>

  )
}

export default Support
