
import './App.css';

const Header = (props)=>{
return(
  <div> <h1>{props.course}</h1></div>

)
}

const Part = (props)=>{

  return(
   <p>{props.partNo} {props.exe}</p>
  )
}
const Content = (props)=>{
  console.log(props)
  return(
  <div>
    <Part partNo = {props.one} exe = {props.no1}/>
    <Part partNo = {props.two} exe = {props.no2}/>
    <Part partNo = {props.three} exe = {props.no3}/>
  </div>
  )

}
const Total = (props) => {
  return (
      <p>Number of exercises {props.exercise}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name : 'Fundamentals of React',
    exercises : 10
  }
  const part2 = {
    name : 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
    name : 'State of a component',
    exercises : 14
  }

  

  return (
    <div>
      <Header course = {course}/>
      <Content one = {part1.name} no1 = {part1.exercises}  two = {part2.name} no2 = {part2.exercises} three = {part3.name} no3 = {part3.exercises}/>
      <Total exercise = {part3.exercises+part1.exercises+part2.exercises}/>

    </div>
  )
}

export default App;
