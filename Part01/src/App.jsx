const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Sebastian'></Hello>
      <Footer/>
    </>
  ) 
}

const Hello= (props)=>{
  return(
    <div>
      <p>Hello {props.name}, your are {props.name} years old</p>
    </div>
  )
}

const Footer = ()=> {
  return(
    <div>
      greating app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

export default App  