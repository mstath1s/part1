import { useState } from 'react';
import './App.css';
import './minimal-table.css';

const Header = (props) => {
  return (
    <div> <h1>{props.headerText}</h1></div>
  )
}
const StatisticLine = (props) => {
  return (<tr>
    <td>{props.statisticText}</td>
    <td>{props.count}</td>
  </tr>)

}

const Statistics = (props) => {
  const all = () => { return (props.bad + props.good + props.neutral) }
  // (good: 1, neutral: 0, bad: -1)
  const average = () => { return ((props.bad * (-1) + props.good) / all()) }
  const positiveFeedbackPercent = () => { return ((props.good) / all() * 100 + '%') }
  // nothing to be show yet
  if (all() === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  // render the statistics as they're valid
  else {
    return (
      <table>
        <tbody>
          <StatisticLine statisticText='Good' count={props.good} />
          <StatisticLine statisticText='Neutral' count={props.neutral} />
          <StatisticLine statisticText='Bad' count={props.bad} />
          <StatisticLine statisticText='All' count={all()} />
          <StatisticLine statisticText='Average' count={average()} />
          <StatisticLine statisticText='Positive' count={positiveFeedbackPercent()} />
        </tbody>
      </table>
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
