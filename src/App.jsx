import React, { useState, useEffect } from 'react';
import './App.css'
import Card from './components/Card';
import Navbar from './components/Navbar';


const App = () => {

const [monsters, setMonsters] = useState([]);
const [searchField, setSearchField] = useState('');

const onSearchChange = (event) => {
  setSearchField(event.target.value)
}

const filterMonsters = monsters.filter((monster) => {
  return monster.name.toLowerCase().includes(searchField.toLowerCase())
})



useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((users) => setMonsters(users))
}, [])

  return(
    <div>
      <Navbar onSearchChange={onSearchChange}/>
      <Card monsters={filterMonsters}/>
    </div>
  )
}

export default App;
