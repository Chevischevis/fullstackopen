import { useState } from 'react'
const Hello = ({ name, age }) => {
  //Desectructuracion
  // const name = props.name
  // const age = props.age
  // const { name, age } = props
  const bornYear = () => new Date().getFullYear - props.age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p> So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('App is rendering with counter value: ', counter)
  //Usando useState, para recordar el valor del contador
  // setTimeout(() => setCounter(counter + 1), 1000)


  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  } 
  const setToZero = () =>{
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  const decreaseByOne = () =>{
console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  } 
  // const name = 'Peter'
  // const age = 10

  // return (
  //   <div>
  //     <h1>Greetings</h1>
  //     <Hello name="Maya" age={26 + 10} />
  //     <Hello name={name} age={age} />
  //   </div>
  // )
  // const handleClick = () => {
  //   console.log('clicked')
  // }

  const Display = (props) =><div>{props.counter}</div>
  const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  return (
    <>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
      {/* <button onClick={handleClick}>Click</button> */}
    </>
  )
}
//Comentario importante
//Desectructuracion
export default App
