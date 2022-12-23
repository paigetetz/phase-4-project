import React, {useEffect, useState} from'react';
import Home from './Components/Home';
import './App.css';
import NavBar from './Components/NavBar';


function App() {
  const [experiences, setExperiences] = useState([])
  useEffect(() => {
    fetch('/experiences')
    .then(res => res.json())
    .then(data => setExperiences(data))
  }, [])




  return (
    <div>
      <NavBar/>
      <Search/>
      <Home experiences = {experiences}/>
    </div>
  )
}

export default App;
