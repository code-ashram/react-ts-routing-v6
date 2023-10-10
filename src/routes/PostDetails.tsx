import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { getComments, Comment, Post, getPost } from '../api'

type Params = {
  postId: string
}

const PostDetails = () => {
  const { postId } = useParams<Params>()
  const [post, setPost] = useState<Post>()
  const [comments, setComments] = useState<Comment[]>()

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    // if (postId !== undefined && Number.isFinite(postId) && Number.isInteger(+postId))
    getComments(signal, +postId).then((response) => setComments(response))
    getPost(signal, +postId).then((response) => setPost(response))

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
        <article>
          <h2>{post?.title}</h2>

          <p>{post?.body}</p>
        </article>

        <div>
          <h3>Comments:</h3>
          <ul>
            {comments?.map((comment) => (
              <li key={comment.id}>
                <h2>{comment.name}</h2>

                <p>{comment.email}</p>

                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default PostDetails
