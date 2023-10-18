import { useEffect, useState } from 'react'
import { getComments, Comment } from '../api'
import { NavLink, useParams } from 'react-router-dom'

type Params = {
  postId: string
}

const Post = () => {
  const [comments, setComments] = useState<Comment[]>()
  const { postId } = useParams<Params>()

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    postId && getComments(signal, +postId).then((response) => setComments(response))

    return () => {
      controller.abort()
    }
  }, [postId])

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>

      <main>
        <h1>Posts List</h1>


        <ul>
          {comments?.map((comment) => (
            <li key={comment.id}>
              <h2>{comment.name}</h2>

              <p>{comment.email}</p>

              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Post
