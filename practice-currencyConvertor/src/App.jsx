import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyConvertor from './customhooks/useCurrencyConvertor'

function App() {

  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo =  useCurrencyConvertor(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmt)
    setConvertedAmt(amount)
  }

  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to])
  }

  return (
    <>
    <div>
      <div>
        <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div>
          <InputBox 
          label="From"
          amount={amount}
          currencyOption={options}
          selectedCurrency= {from}
          onAmountChange= {(amt)=> setAmount(amt)}
          onCurrencyChange = {(cur)=> {setFrom(cur)}}

          />
          </div>
          <div>
          <button type='button' 
         // this is also used  then we need to pass parameter, defining function to call another function
         //kind of wrapper function
//          ✔ Creates a wrapper function
// ✔ That wrapper calls swap()
// ✔ Used when you want to pass arguments
         //  onClick={() => swap()}
         onClick={swap}
          >
            Swap
          </button>
          </div>
          <div>
            <InputBox
              label="To"
              amount={convertedAmt}
              currencyOption={options}
              selectedCurrency={to}
            
              onCurrencyChange={(curr) => setTo(curr)}
              amountDisabled

            />
          </div>
          <button >
            convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </form>
      </div>
    </div>
    </div>
     
    </>
  )
}

export default App
