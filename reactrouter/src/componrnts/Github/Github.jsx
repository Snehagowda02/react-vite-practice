import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()



  //const [data, setData] = useState([]) // empty array by default
// useEffect(()=>{
//   fetch('https://api.github.com/users/hiteshchoudary')
//   .then(response => response.json())
//   .then(data=> {
//     console.log(data)
//     setData(data)
//   })
// }, [])

  return (
    <div> Github followers: {data.followers}
    <img src={data.avatar_url} alt='Git Picture' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}