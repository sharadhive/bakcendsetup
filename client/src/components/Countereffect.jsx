import React,{useState,useEffect} from 'react'

function Countereffect() {
const [count , setCount] = useState(0)

useEffect(()=>{
    console.log("this is my counts" , count)
},[count])

  return (
    <div>
        
<hi> count:{count}</hi>

<button onClick={()=> setCount(count+1)}>incriment</button>
    </div>
  )
}

export default Countereffect