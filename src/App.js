
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

       <Part partNo = {props.parts[0].name} exe = {props.parts[0].exercises}/> 
       <Part partNo = {props.parts[1].name} exe = {props.parts[1].exercises}/> 
       <Part partNo = {props.parts[2].name} exe = {props.parts[2].exercises}/> 

  </div>
  )

}
const Total = (props) => {
  return (
      <p>Number of exercises {props.exercise[0].exercises + props.exercise[1].exercises + props.exercise[2].exercises}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  

  const parts = [
  {
    name : 'Fundamentals of React',
    exercises : 10
  },
{

    name : 'Using props to pass data',
    exercises : 7
  },
  {
    name : 'State of a component',
    exercises : 14
  }
]

  

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total exercise = {parts}/>

    </div>
  )
}

export default App;
