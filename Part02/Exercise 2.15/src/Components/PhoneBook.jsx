
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

const Persons = ({ ShowInformation }) => {
  return (
    <>
      {ShowInformation.map(person => (
        <p key={person.name}  >{person.name} {person.number}</p>
      ))}
    </>
  )
}

export { PhoneBook, PersonForm, Persons}