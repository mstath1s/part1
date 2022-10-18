
import './App.css';

const Header = (props)=>{
return(
  <div> <h1>{props.course}</h1></div>

)
}
const Content = (props)=>{
  return(
  <p>{props.part} {props.exe}</p>
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
      <Content part = {part1} exe = {exercises1}/>
      <Content part = {part2} exe = {exercises2}/>
      <Content part = {part3} exe = {exercises3}/>
      <Total exercise = {exercises1+exercises2+exercises3}/>

    </div>
  )
}

export default App;
