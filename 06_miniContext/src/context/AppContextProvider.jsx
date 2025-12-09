// children are nothing but div
// generic name children 

import { useState } from "react"
import AppContext from "./AppContext"

const AppContextProvider = ({children}) => {
    const [user, setUser] = useState("")

    return(
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider