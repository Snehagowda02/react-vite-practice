import { useEffect, useState } from "react"

function useCurrencyConvertor(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> setData(res[currency])) // like res.currency
        .catch((err) => console.log(err))
        console.log(data)
    }, [currency])

    return data
}

export default useCurrencyConvertor