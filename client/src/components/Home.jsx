import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
import About from './About';  
function Home() {
  const navigate = useNavigate();
  return (
    <div>
 <Button variant="primary"onClick={()=> {navigate("/About")}}>login</Button>
 <Button variant="outline-info"onClick={()=> {navigate("/Contact")}}>Info</Button>


    </div>
  )
}

export default Home