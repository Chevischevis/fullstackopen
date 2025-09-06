
const PhoneBook = ({ filter, handleFilterChange }) => {
  return (
    <>
      <div>filter shown with:
        <input value={filter} onChange={handleFilterChange}></input> </div>
      <h3>Add a new</h3>
    </>
  )
}

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber}
          onChange={handleNumberChange} /></div>
        <div>
          <button type="submit"> save</button>
        </div>
      </form>
    </>
  )
}

const Persons = ({ ShowInformation, handleRemovePerson }) => {
  return (
    <>
      {ShowInformation.map(person => (
        <div key={person.id}>
          <p>{person.name} {person.number}</p>
          <button onClick={() => { handleRemovePerson(person.id)}}>delete</button>
        </div>
      ))}
    </>
  )
}

export { PhoneBook, PersonForm, Persons}