// children are nothing but div
// generic name children 

import { useState } from "react"
import AppConext from "./AppContext"

const AppContextProvider = ({children}) => {
    const [user, setUser] = useState("")

    return(
        <AppConext.Provider value={{user, setUser}}>
            {children}
        </AppConext.Provider>
    )
}
export default AppContextProvider