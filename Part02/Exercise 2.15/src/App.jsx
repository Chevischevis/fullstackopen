import Note from './Components/Note'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(newName + `is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName}
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      number: newNumber}
    setPersons(persons.concat(numberObject))
    setNewNumber('')
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  console.log(persons.map(person => person.name))
  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
                    onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber}
                      onChange={handleNumberChange}/></div>
        <div>
          <button type="submit"> save</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => (
          <p key={person.name}  >{person.name}</p>
        ))}
    </div>
  )
}

export default App