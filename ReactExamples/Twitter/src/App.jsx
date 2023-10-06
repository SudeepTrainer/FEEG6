import { useEffect, useState } from "react"

function App() {

  const [starWarData,setStarWarData] = useState();

  function fetchData(){
    fetch("https://swapi.dev/api/people/1")
    .then(response => response.json())
    .then(data => setStarWarData(data))
  }
  
  useEffect(fetchData,[])

  console.log("component rendered");
  
  return (
    <h4>{JSON.stringify(starWarData)}</h4>
  )
}

export default App
