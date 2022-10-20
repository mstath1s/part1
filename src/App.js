
import { useState } from 'react';
import './App.css';

const Header = (props) => {
  return (
    <div> <h1>{props.headerText}</h1></div>

  )
}

const Statistic = (props) => {
  return (
    <div>{props.statisticText} : {props.count}</div>
  )
}
const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>
//save clicks of each button to its own state

const App = () => {

  const Info = {
    header: 'Give feedback',
    analytics: 'Statistics'
  }

  const goodCount = ()=>setGood(good+1)
  const neutralCount = ()=>setNeutral(neutral+1)
  const badCount = ()=>setBad(bad+1)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  return (
    <div>
      <Header headerText={Info.header}/>
      <Button onClick={goodCount} text='Good'/>
      <Button onClick={neutralCount} text='Neutral'/>
      <Button onClick={badCount} text='Bad'/>
      <Header headerText={Info.analytics}/>
      <Statistic statisticText='Good' count={good}/>
      <Statistic statisticText='Neutral' count={neutral}/>
      <Statistic statisticText='Bad' count={bad}/>
    </div>
    // <div>
    //   <Header course={course.name} />
    //   <Content parts={course.parts} />
    //   <Total exercise={course.parts} />
    // </div>
  )
}

export default App;
