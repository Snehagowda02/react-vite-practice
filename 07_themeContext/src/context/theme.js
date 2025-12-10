// approach 2 of context api

import { createContext, useContext } from "react";
// when context given first time , what and all values it should have
// can be given like createcontext({....})
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})
// as per above code our theme initially contains a var THemeMode: light theme 
// 2 functions

export const ThemeContextProvider = ThemeContext.Provider

// Both works  below one have to change file name theme.jsx
// export function ThemeContextProvider({ children, value }) {
//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// can write customHooks
// last time in all files we used to write useContext
//now just call useTheme 
export default function useTheme(){
    return useContext(ThemeContext)
}
