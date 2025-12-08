// here we have pure js so not jsx
import React from "react"
const AppContext = React.createContext()

export default AppContext

//context gives a provider
// So AppContext is also a provider
// which gives access to all state variables which are inside that provider
// aka to all sub components inside that AppCOntext.Provider
