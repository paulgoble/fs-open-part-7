import { useField } from '../hooks'
import { useNavigate } from 'react-router-dom'

export const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const navigate = useNavigate()
  const resetForm = (e) => {
    e.preventDefault()
    content.reset()
    author.reset()
    info.reset()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.props.value,
      author: author.props.value,
      info: info.props.value,
      votes: 0
    })
    props.setNotification(`${content.props.value} has been added to the list`)
    setTimeout(() => props.setNotification(''), 5000)
    navigate('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.props} />
        </div>
        <div>
          author
          <input {...author.props} />
        </div>
        <div>
          url for more info
          <input {...info.props} />
        </div>
        <button>create</button>
        <button onClick={resetForm}>reset</button>
      </form>
    </div>
  )

}