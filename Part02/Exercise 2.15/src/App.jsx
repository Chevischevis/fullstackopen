import { PhoneBook, PersonForm, Persons } from './Components/PhoneBook'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(newName + `is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const ShowInformation = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons
  console.log(persons.map(person => person.name))
  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneBook filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons ShowInformation={ShowInformation} />
    </div>
  )
}

export default App