import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { getPosts, Post } from '../api'

const Root = () => {

  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    getPosts(signal).then((response) => setPosts(response))

    return () => {
      controller.abort()
    }
  }, [])

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
          {posts?.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Root
