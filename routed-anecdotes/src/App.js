import { useState } from 'react'
import { Routes, Route, Link, useMatch } from 'react-router-dom'
import { AnecdoteList } from './Views/AnecdoteList'
import { CreateNew } from './Views/CreateNew'
import { About } from './Views/About'

const Menu = ({ notification }) => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link to="/" style={padding}>anecdotes</Link>
      <Link to="/create" style={padding}>create new</Link>
      <Link to="/about" style={padding}>about</Link>
      {notification ? <p>{notification}</p> : null}
    </div>
  )
}

const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const App = () => {
  const [notification, setNotification] = useState('')
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  // const vote = (id) => {
  //   const anecdote = anecdoteById(id)
  //   const voted = {
  //     ...anecdote,
  //     votes: anecdote.votes + 1
  //   }
  //   setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  // }

  const match = useMatch('/anecdotes/:id')
  const anecdote = match ?
    Array(anecdoteById(Number(match.params.id)))
    : null
  
  return (
    <div>
      <h1>Software Anecdotes</h1>
      <Menu notification={notification}/>
        <Routes>
          <Route path="/create" 
            element={<CreateNew addNew={addNew} 
              setNotification={setNotification} />} 
          />
          <Route path="/about" 
            element={<About />} 
          />
          <Route path="/anecdotes/:id"
            element={<AnecdoteList anecdotes={anecdote} />}
          />
          <Route path="/" 
            element={<AnecdoteList anecdotes={anecdotes} />} 
          />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
