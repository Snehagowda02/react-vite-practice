import { useId } from "react";

function InputBox({
    label,
   // className = ''
   amount,
   onCurrencyChange,
   onAmountChange,
   selectedCurrency = "usd",
   currencyOption = [],
   amountDisabled

}){

    const amtid = useId()
    return(
        <>
        <div>
           <div>
                <label htmlFor={amtid}>
                {label}
                </label>
                <input
                id={amtid}
                type="number"
                placeholder="Amount"
                disabled= {amountDisabled}
                value={amount}
                onChange={(e)=> {
                    onAmountChange && onAmountChange(Number(e.target.value))
                }}
                />
           </div>
           <div>
                <p>Currency Type</p>
                <select
                value={selectedCurrency}
                onChange={(e) => {
                    onCurrencyChange && onCurrencyChange(e.target.value)
                }}
                //disabled={currenc}
                >
                   {currencyOption.map((opt) => (
                    <option key={opt} value={opt} >
                       {opt}
                    </option>
                   ))}
                </select>
           </div>
        </div>
        </>
    )
}
export default InputBox;