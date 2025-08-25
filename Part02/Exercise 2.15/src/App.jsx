import Note from './Components/Note'
import { useState } from 'react'

const App = () => {
const  [persons, setPersons] = useState([{name: 'Arto Hellas'}])
const [NewName, setNewName] = useState('')

return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit"></button>
          </div>
          </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Note key={person.name} note={person} />)}
      </ul>
      <div>debug: {newName}</div>
    </div>
  ) 
}

export default App