import  { useState } from "react";
function App2() {

    const [counter, setCounter] = useState(5)
    // useState gives one variable-counter and
    //  one function- setCounter
    


    const addVal = () =>{
        if(counter>=20) return;
       setCounter(counter+1) ;
    }
    // in js when counter changes we   used to 
    // take document.getElement , then set it .innertHTML = counter
    // was hectic

    const decVal = () => {
        if(counter<=0) return;
        setCounter(counter-1);
    }

    let message = `counter value : ${counter}`;
    if(counter>=20) message= "cannot exceed 20";
    else if (counter<= 0) message = "cannot go below 0"

    return (
        <>
        <h1>Chai aur code</h1>
        {/* {counter >= 20? (
            <h2 style={{color: "red"}}> Cannot exceed 20</h2>
        ):
        (<h2> Counter value : {counter}</h2>)} */}
        <h2 style={{color: counter >= 20 || counter <=0 ? "red" : "black"}}>
        {message} </h2>
        <button onClick={addVal}>Increase Count{counter}</button>
        <button onClick={decVal}>Decrease Count</button>
        </>
    )

}

export default App2;