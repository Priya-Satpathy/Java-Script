import { useState } from "react";

function CounterApp(){

    let [count,setCount] = useState(1)
    function IncreaseValue(){
        count = count+1;
        
        setCount(count)
        
    }
       function decreaseValue(){
        count = count-1;
       
        setCount(count)
        
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={IncreaseValue}>Increase</button>
            <button onClick={decreaseValue}>Decrease</button>
        </>
    )
}
export default CounterApp