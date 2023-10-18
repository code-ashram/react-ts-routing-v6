import { Link, NavLink, useLoaderData } from 'react-router-dom'

import { getPosts, Post } from '../api'

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => await getPosts().then((response) => response)

const Root = () => {

  const posts = useLoaderData() as Post[]

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
