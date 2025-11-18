import { useState, useCallback, useEffect, useRef } from "react";

export default function App3() {

    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState(null)

    // useRef Hook
    const passwordRef = useRef(null)


    const copyPasswordToclipboard = useCallback(() => {
        passwordRef.current?.select()  // used to highlight the selected value
       // passwordRef.current?.setSelectionRange(0, 3) // selects the range ,  not an use case here  but just implemented
        window.navigator.clipboard.writeText(password)
    }, [password])

// again and passGenerator is being called, one Hook is there to optimize that
// it caches the function definition , optimize calling the function 

    // const passGenerator = () =>{
    //     String = "ABCDEFGHIJKLMNOPQRST";

        
    // }

    //const passGenerator = useCallback(function, [dependencies])
    const passGenerator = useCallback(() => {
        let pass = ""
        let Str = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
        if(numAllowed) Str += "1234567890"
        if(charAllowed) Str += "!@#$%^&*())_"
        for(let i=1; i<= length; i++){
            let char = Math.floor(Math.random() * Str.length + 1 );
            pass += Str.charAt(char)
        }
        setPassword(pass)      
    }, [length, numAllowed,charAllowed, setPassword])
    // setpassowrd is optional for optimize 
    // useCallback is a function that lets you cache a function definition between re-renders

// useCallback, optimize method whenever these dep changes 

// useEffect, if some dep changes rerun method 
useEffect(() => {
    passGenerator();
}, [length, numAllowed, charAllowed, passGenerator])

    return (
    <>
        {/* <div className="h-screen w-screen" style={{backgroundColor: "black"}}>
            <h1 className="text-4l text-center">Password Generator</h1>
        </div> */}
        <div className="h-screen w-screen flex flex-col justify-center items-center rounded-lg text-orange-500 bg-gray-700">
           
            <h1 className="text-white text-center mb-4">
                Password Generator
            </h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input 
                    type="text" 
                    value={password}
                    className="outline-none w-full py-1 px-3"
                    placeholder="Password"
                    readOnly  
                    ref={passwordRef}
                />
                <button className="outline-none bg-blue-600 text-white "
               onClick={() => copyPasswordToclipboard()}>
                    copy
                </button>
{/* onClick={() => pass}  // returns the function without calling it */}

            </div>
            <div className="flex ">
                <div className="flex items-center">
                    <input 
                    type="range"
                    min={6}
                    max={50}
                    value={length}
                    onChange={(e) => {setLength(e.target.value)}}
                    />
                    <label> Length: {length}</label>
                </div>
                <div>
                    <input 
                    type="checkbox"
                    defaultChecked={numAllowed}
                    id="numberInput"
                    onChange={() => {
                        setNumAllowed((prev) => !prev);
                    }}
                    />
                    <label> Numbers </label>
                </div>
                <div>
                    <input 
                    type="checkbox"
                    onChange={() => 
                    {
                        setCharAllowed((prev) => !prev)
                    }
                    }
                    />
                    <label>Characters</label>

                </div>

            </div>
        </div>

    </>
    );
}

// useRef 
// example scenario -- copy button , I have copy buttom has to copy the password
// but it don't know what password is set , because 2 diff components 
 
// returns a mutable ref object , whose current property is initialised to passed argumnet
