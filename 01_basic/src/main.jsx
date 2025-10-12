import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import App2 from './App2';


// const reactElement = React.createElement(
//   'a',
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Sample />   it is good that if we keep only app here in attaching to root */}
    <App />
    <App2 />
    {/* reactElement */}
  </StrictMode>,
)
