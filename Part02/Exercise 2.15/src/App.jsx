<<<<<<< HEAD
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
=======
import {PhoneBook, PersonForm, Persons} from './Components/PhoneBook'
import { useState, useEffect} from 'react'
import axios from 'axios' 
import './App.css'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  useEffect(() => {
    fetch('http://localhost:3001/persons')
      .then(response => response.json())
      .then(data => setPersons(data))
  }, [])
  console.log('render', persons.length, 'persons')
>>>>>>> 2f6241b (instalacion de axios al ejercicio)


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  // ...
}