import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();

  function ClickHandler()
  {
    navigate("/support");
  }
  function backHandler(){
    navigate(-1)
  }
  return (
    <div>
 <div>
      This is About Page 
    </div>
    <button onClick={ClickHandler}>Go To Support Page</button>
    <button onClick={backHandler}>Go Back</button>

    </div>
   
  )
}

export default About
