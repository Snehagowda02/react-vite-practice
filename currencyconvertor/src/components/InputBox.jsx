// components could be in caps

import { useId } from "react"
// used for generating unique IDs that can be passed to accessiblility attributes

export default function InputBox({
  label,
  amount, //
  onAmountChange, // method --- needs in parent component ,as amount changes state also should change
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisable = false,
  className = "",}) {

    const amountInputId = useId()
  // i'm asking a className from user , whhichever classnaqme user provide added that using ` $
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex text-black ${className}`}>
      <div className="w-2/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
        {label}
        </label>
        <input
        id={amountInputId}
        className="outline-none w-full bg-transparent py-1.5"
        type="number"
        placeholder="Amount"
        disabled= {amountDisabled}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div>
        <p>Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100"
        value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled= {currencyDisable}>
          {/* <option value="usd">
            usd
          </option> */}
          {currencyOption.map((currency) => (
            // to increase the performance inside loop to repeat performance 
            // remeber key in loops in react 
            <option key= {currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
