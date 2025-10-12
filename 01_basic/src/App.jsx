const username = "sneha"
function Sample(){
  return (<h1>HIIIIII {username} </h1>);
}

function App() {

  return (
    <>
      <Sample />
      <h3>in App component</h3>   
      <h2>Component name should start with caps letter</h2>
    </>
  )
}

export default App
