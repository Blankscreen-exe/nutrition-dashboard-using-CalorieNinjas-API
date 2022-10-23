import { useState, useEffect } from 'react'

import './App.css'

import Navbar from './components/Navbar'
import Filtertab from './components/Filtertab'
import Dashboard from './components/Dashboard'

import getFoodSpecs from './utils/fetchUtil'


function App() {
  // set states for
  // query item name
  // query response
  const [queryItemName, setQueryItemName] = useState("")
  const [queryResult, setQueryResult] = useState([])
  const [showCharts, setShowCharts] = useState(false)

  //fetch query and set state
  function handleSubmit(event) {
    console.log("INSIDE HANDLE SUBMIT")
    
    event.preventDefault()
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fe73ec6e99msha2c3d171599f2e0p101051jsn7da3914d5220',
        'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
      }
    };
    
    fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${queryItemName}`, options)
      .then(response => response.json())
      .then(response => setQueryResult(response.items[0]))
      .catch(err => console.error(err));
    // const data = getFoodSpecs(queryItemName)
    // console.log(data.items)
    // setQueryResult(getFoodSpecs(queryItemName).items[0])

    setShowCharts(true)
  }
  
  function handleItemNameChange(event) {
    console.log("INSIDE ITEM NAME CHANGE")
    event.preventDefault()
    
    setQueryItemName(event.target.value )
  }

  // render
  return (
    <div className="App">
      <Navbar />

      <div className='body-div'>
        <Filtertab 
          handleSubmit={handleSubmit}
          handleItemNameChange={handleItemNameChange}
          queryItemName={queryItemName}
        />

        {showCharts
        ?
          <span>
            <div>
              <h2 className='display-title'>Showing food specs for <span className='red'>{queryItemName.toUpperCase()}</span></h2>
            </div>    
            <Dashboard 
            queryResult={queryResult}
            />
          </span>
        :
        <h2 className='display-title'>Search for something to see their stats</h2> 
        }
      </div>
    </div>
  )
}

export default App
