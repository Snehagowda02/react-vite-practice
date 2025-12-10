import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/theme'
import ThemeBtn from './components/Themebutton'
import Card from './components/Card'


// what to set for theme it is here in App and where to set is here
function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(()=> {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  // both works 

//   useEffect(() => {
//   document.documentElement.classList.remove("light", "dark");
//   document.documentElement.classList.add(themeMode);
// }, [themeMode]);
  return (
    <>
      <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
        {/* <h1 className='p-4 bg-pink-600 text-3xl'>React Context API</h1> */}
      
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                </div>
                    <Card />
                <div className="w-full max-w-sm mx-auto">
                  
                </div>
            </div>
          </div>
      </ThemeContextProvider>

    </>
  )
}

export default App
