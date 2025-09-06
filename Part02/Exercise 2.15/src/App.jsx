import { PhoneBook, PersonForm, Persons } from './Components/PhoneBook'
import { useState, useEffect } from 'react'
import phoneBookService from './services/phoneBook'
import './index.css'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    phoneBookService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }

  useEffect(hook, [])


const addPerson = (event) => {
  event.preventDefault()

  if (persons.some(person => person.name === newName)) {
    const personObject = persons.find(person => person.name === newName)
    const id = personObject.id

    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const updatedPerson = { ...personObject, number: newNumber }
      console.log(updatedPerson)
      phoneBookService
        .update(id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
    return
  }

  const personObject = {
    name: newName,
    number: newNumber,
    id: persons.length + 1,
  }

  phoneBookService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
}


  const handleRemovePerson = (id) => {
    const person = persons.find(p => p.id === id);
    if (!person) {
      alert("This contact no longer exists.");
      return;
    }

    if (window.confirm(`Delete ${person.name}?`)) {
      phoneBookService.remove(id).then(() => {
        setPersons(persons.filter(p => p.id !== id));
      });
    }
  };

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
      <Persons ShowInformation={ShowInformation} handleRemovePerson={handleRemovePerson} />
    </div>
  )
}

export default App