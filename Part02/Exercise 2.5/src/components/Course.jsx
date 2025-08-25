const Course = ({courses}) => {
  console.log(courses);
  return (  
     <div>
      {courses.map(course => <CourseDetail key={course.id} course={course} />)}
    </div>)
}

const CourseDetail = ({course}) => {
  return (
    <div>
      <Header title={course.name}></Header> 
      <Content parts={course.parts} ></Content>
      <Total parts={course.parts}></Total>  
    </div>
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
const Total = (props) => {
  return (
    <>
      <p><strong> Total of exercises</strong> {props.parts.reduce(function(sum, part){ return sum + part.exercises}, 0)}</p>
    </>

  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
    </>
  )
}

export default Course