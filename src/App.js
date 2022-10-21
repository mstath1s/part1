
import { useState } from 'react';
import './App.css';

const Header = (props) => {
  return (
    <div> <h1>{props.headerText}</h1></div>
  )
}
const Statistic = (props) => {
  return (<div>{props.statisticText} {props.count}</div>)
}


const Statistics = (props) => {
  const all = () => { return (props.bad + props.good + props.neutral) }
  // (good: 1, neutral: 0, bad: -1)
  const average = () => { return ((props.bad * (-1) + props.good) / all()) }
  const positiveFeedbackPercent = () => { return ((props.good) / all() * 100 + '%') }
  // nothing to be show yet
  if (all() === 0) {
    return (
      <Statistic statisticText='No feedback given' />
    )
  }
  // render the statistics as they're valid
  else {
    return (
      <div>
        <Statistic statisticText='Good' count={props.good} />
        <Statistic statisticText='Neutral' count={props.neutral} />
        <Statistic statisticText='Bad' count={props.bad} />
        <Statistic statisticText='All' count={all()} />
        <Statistic statisticText='Average' count={average()} />
        <Statistic statisticText='Positive' count={positiveFeedbackPercent()} />

      </div>
    )
  }
}

//save clicks of each button to its own state
const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

const App = () => {

  const Info = {
    header: 'Give feedback',
    analytics: 'Statistics'
  }

  const goodCount = () => setGood(good + 1)
  const neutralCount = () => setNeutral(neutral + 1)
  const badCount = () => setBad(bad + 1)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  return (
    <div>
      <Header headerText={Info.header} />
      <Button onClick={goodCount} text='Good' />
      <Button onClick={neutralCount} text='Neutral' />
      <Button onClick={badCount} text='Bad' />
      <Header headerText={Info.analytics} />
      <Statistics bad={bad} good={good} neutral={neutral} />

    </div>
  )
}

export default App;
//Math.floor(Math.random() * lengthOfArray-1);
