import { Link } from 'react-router-dom'

export const AnecdoteList = ({ anecdotes }) => {
  if (anecdotes.length === 1) {
    return(
      <div>
        <h2>{anecdotes[0].content}</h2>
        <p>{`has ${anecdotes[0].votes} votes`}</p>
      </div>
    )
  }

  return(
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => 
          <li key={anecdote.id}>
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}