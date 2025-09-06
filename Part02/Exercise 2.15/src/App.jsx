import { PhoneBook, PersonForm, Persons, NotificationError, NotificationSuccess } from './Components/PhoneBook'
import { useState, useEffect } from 'react'
import phoneBookService from './services/phoneBook'
import './index.css'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const hook = () => {
    phoneBookService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }

  useEffect(hook, [])

  const addPerson = async (event) => {
    event.preventDefault()

    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      // La persona ya existe, intentar actualizar
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        try {
          const returnedPerson = await phoneBookService.update(existingPerson.id, updatedPerson)
          setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`Updated ${returnedPerson.name}'s number`)
          setTimeout(() => setSuccessMessage(null), 5000)
        } catch (error) {
          setErrorMessage(`Information of ${existingPerson.name} has already been removed from server or an error occurred`)
          setTimeout(() => setErrorMessage(null), 5000)
          setPersons(persons.filter(p => p.id !== existingPerson.id))
        }
      }
    } else {
      // La persona no existe, crear nuevo contacto
      const newId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1
      const newPerson = { name: newName, number: newNumber, id: newId }

      try {
        const returnedPerson = await phoneBookService.create(newPerson)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setSuccessMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => setSuccessMessage(null), 5000)
      } catch (error) {
        setErrorMessage(`Failed to create ${newName}: ${error.message}`)
        setTimeout(() => setErrorMessage(null), 5000)
      }
    }
  }


  const handleRemovePerson = async (id) => {
    const person = persons.find(p => p.id === id);
    if (!person) {
      alert("This contact no longer exists.");
      return;
    }

    if (window.confirm(`Delete ${person.name}?`)) {
      try {
        const response = await phoneBookService.remove(id);
        setPersons(persons.filter(p => p.id !== id));
        setSuccessMessage(`Deleted ${person.name}`);
        setTimeout(() => setSuccessMessage(null), 5000);
      } catch (error) {
        setErrorMessage(`Information of ${person.name} has already been removed from server or an error occurred`);
        setTimeout(() => setErrorMessage(null), 5000)
        setPersons(persons.filter(n => n.id !== id))
      }
    }
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };


  const ShowInformation = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons
  return (
    <div>
      <h2>Phonebook</h2>
      <NotificationError message={errorMessage}></NotificationError>
      <NotificationSuccess message={successMessage}></NotificationSuccess>
      <PhoneBook filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons ShowInformation={ShowInformation} handleRemovePerson={handleRemovePerson} />
    </div>
  )
}

export default App
