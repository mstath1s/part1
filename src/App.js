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
const anecdotes = [
  {
    text: 'If it hurts, do it more often.',
    votes: 0
  },
  {
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    text: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  },

  {
    text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    votes: 0
  }
]

//save clicks of each button to its own state
const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

const App = () => {

  const Info = {
    header: 'Give feedback',
    analytics: 'Statistics'
  }



  const votesCount = () => {
   // setVotes(vote + 1)
   anecdotes[selected].votes = vote
    setVotes(vote + 1)
   console.log(vote)
    //console.log(selected)
    console.log( anecdotes[selected].votes)
  }

  const neutralCount = () => setNeutral(neutral + 1)
  const badCount = () => setBad(bad + 1)

  const [vote, setVotes] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [selected, setSelected] = useState(0)

  const selectedCount = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    if(anecdotes[selected].votes > 0)
    {
      setVotes(anecdotes[selected].votes)
    }
    else{
      setVotes(0)
    }
  }
  return (
    <div>
      {anecdotes[selected].text}
      <br />

      {'has ' + anecdotes[selected].votes + ' votes'}
      <br />
      <Button onClick={votesCount} text='vote' />

      <Button onClick={selectedCount} text='next anecdode' />


      {/* <Button onClick={goodCount} text='Good' />
      <Button onClick={neutralCount} text='Neutral' />
      <Button onClick={badCount} text='Bad' />
      <Header headerText={Info.analytics} />

      <Statistics bad={bad} good={good} neutral={neutral} /> */}
    </div>
  )
}

export default App;

