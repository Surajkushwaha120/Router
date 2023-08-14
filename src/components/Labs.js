import React from 'react'
import { useNavigate } from 'react-router-dom';
function Labs() {


  const navigate = useNavigate();
  function ClickHandler(){
    navigate("/about");
  }
  function backHandler(){
    navigate(-1)
  }



  return (
    <div>
   <div>
         This is Labs Page 
        
    </div>
    <button onClick={ClickHandler}>Move to About</button>
     <button onClick={backHandler}>Go Back</button>
    </div>
    
  )
}

export default Labs
