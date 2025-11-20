import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt]= useState(0)

  const currencyInfo = useCurrencyInfo(from)

 const Options =  Object.keys(currencyInfo)

 // how to swap two variables
 const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmt(amount)
  setAmount(convertedAmt)
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
          e.preventDefault();
          convert()
        }}>
          <div>
            <InputBox 
              label="From"
              amount={amount}
              currencyOption={Options}
              onCurrencyChange= {(currency) => setFrom(currency)}
              selectCurrency={from}  
              onAmountChange={(amount) =>{setAmount(amount)}}
                 
              />
          </div>
          <div>
            <button 
            type='button'
            className='absolute border-white rounded-md bg-blue-600'
            onClick={swap} // give reference

          // this is also used  then we need to pass parameter, defining function to call another function
         //kind of wrapper function
//          ✔ Creates a wrapper function
// ✔ That wrapper calls swap()
// ✔ Used when you want to pass arguments
         //  onClick={() => swap()}
            >  
              Swap
            </button>
          </div>
          <div>
            <InputBox 
              label= "To"
              amount={convertedAmt}
              currencyOption={Options}
              onCurrencyChange={(currency)=> setTo(currency)}
              selectCurrency={to}
              amountDisabled // it means true  
            />

          </div>
          <button>
            convert {from.toUpperCase() } to {to.toUpperCase()}
          </button>

        </form>
      </div>
    </div>
 </div>
     </>
  )
}

export default App
