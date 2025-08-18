const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <>
      <div>
        <Header title={course}></Header>
        <Content part1={part1} exercises1={exercises1}
                 part2={part2} exercises2={exercises2}
                 part3={part3} exercises3={exercises3}></Content>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    </>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}
const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  )
}
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, your are {props.name} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greating app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

export default App  