import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    return(
        <>
            <div>
                <h1>Hello Counter!</h1>
                <h1>{count}</h1>
                <div>
                    <button onClick={()=>setCount(count+1)}>+</button>
                    <button onClick={()=>setCount(count-1)}>-</button>
                </div>
            </div>
        </>
    )
}