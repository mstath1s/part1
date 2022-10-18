
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  return (
    <div>
      <Header course = {course}/>
      <Content one = {part1} no1 = {exercises1}  two = {part2} no2 = {exercises2} three = {part3} no3 = {exercises3}/>
      <Total exercise = {exercises1+exercises2+exercises3}/>

    </div>
  )
}

export default App;
