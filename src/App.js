
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

  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    console.log('clicked')
  }
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  console.log('rendering...', counter)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={()=>setCounter(counter+1)}>
        Plus
      </button>
      <button onClick={()=>setCounter(0)}>
        Zero
      </button>
    </div>
    // <div>
    //   <Header course={course.name} />
    //   <Content parts={course.parts} />
    //   <Total exercise={course.parts} />
    // </div>
  )
}

export default App;
