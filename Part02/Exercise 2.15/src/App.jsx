import {PhoneBook, PersonForm, Persons} from './Components/PhoneBook'
import { useState } from 'react'
import './App.css'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
                  handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>  
      
      <h2>Numbers</h2>
     <Persons ShowInformation={ShowInformation} />
    </div>
  )
}
//Me quede en la seccion EL navegador como entorno de ejecucion
export default App