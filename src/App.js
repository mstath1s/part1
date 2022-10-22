import { useState } from 'react';
import './App.css';

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

const mostVotedAnecdote = (props)=>{
  var maxValue = Number.MIN_VALUE;
  var item = 0;

  for(var i=0;i<props.length;i++){
      if(props[i].votes > maxValue){
      maxValue = props[i].votes;
      item = i;
    
     }
  }
  console.log('Max value = ', maxValue);
  console.log('props length = ', props.length);
  return item;
}
test pr
//save clicks of each button to its own state
const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

const App = () => {

  const votesCount = () => {
    setVotes(anecdotes[selected].votes + 1) // vote = 
  }
  const selectedCount = () => {
    const temp = Math.floor(Math.random() * anecdotes.length)
    setSelected(temp)
    setVotes(anecdotes[temp].votes)
  }
  const [vote, setVotes] = useState(0)
  const [selected, setSelected] = useState(0)

  // Update the votes attribute at the object anecdotes
  anecdotes[selected].votes = vote
 let mva = mostVotedAnecdote(anecdotes)
 console.log(mva)

  return (
    <div>
      {anecdotes[selected].text}
      <br />
      {'has ' + anecdotes[selected].votes + ' votes'}
      <br />
      <Button onClick={votesCount} text='vote' />
      <Button onClick={selectedCount} text='next anecdode' />
      <br />
      <h2>Anecdote with most votes</h2  >
      { anecdotes[mva].text}
      <p>{anecdotes[mva].votes+' votes'}</p>
  
    </div>
  )
}
export default App;