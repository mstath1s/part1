
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

//save clicks of each button to its own state
const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>

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

  const all=()=>{return(bad+good+neutral)}
  // (good: 1, neutral: 0, bad: -1)
  const average=()=>{return((bad*(-1)+good)/all())}
  const positiveFeedbackPercent=()=>{return((good)/all()*100+'%')}


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
      <Statistic statisticText='All' count={all()}/>
      <Statistic statisticText='Average' count={average()}/>
      <Statistic statisticText='Positive' count={positiveFeedbackPercent()}/>
    </div>
  )
}

export default App;
//Math.floor(Math.random() * lengthOfArray-1);
