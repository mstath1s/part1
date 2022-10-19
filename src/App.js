
import { useState } from 'react';
import './App.css';

const Header = (props) => {
  return (
    <div> <h1>{props.course}</h1></div>

  )
}

const Part = (props) => {

  return (
    <p>{props.partNo} {props.exe}</p>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>

      <Part partNo={props.parts[0].name} exe={props.parts[0].exercises} />
      <Part partNo={props.parts[1].name} exe={props.parts[1].exercises} />
      <Part partNo={props.parts[2].name} exe={props.parts[2].exercises} />

    </div>
  )

}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercise[0].exercises + props.exercise[1].exercises + props.exercise[2].exercises}</p>
  )
}


const Display = (props) => {
  return(<div>{props.counter}</div>)
}

const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const increasyByOne = ()=>setCounter(counter+1)
  const decreaseByOne = ()=>setCounter(counter-1)
  const resetCounter = ()=>setCounter(0)

  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Display counter= {counter}/>
      <Button onClick={increasyByOne} text='Plus'/>
      <Button onClick={decreaseByOne} text='Minus'/>
      <Button onClick={resetCounter} text='Zero'/>
    </div>
    // <div>
    //   <Header course={course.name} />
    //   <Content parts={course.parts} />
    //   <Total exercise={course.parts} />
    // </div>
  )
}

export default App;
