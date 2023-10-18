import {
  ActionFunctionArgs,
  NavLink,
  ParamParseKey,
  Params,
  useLoaderData,
  useParams
} from 'react-router-dom'

import { Post, getPost, getComments, Comment } from '../api'

type Parameters = {
  postId: string
}

const PathNames = {
  postDetail: '/posts/:postId'
} as const

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.postDetail>>;
}

type API_DATA = {
  post: Post,
  comments: Comment[]
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }: Args) => {
  const post = await getPost(Number(params.postId)).then((response) => response)
  const comments = await getComments(Number(params.postId)).then((response) => response)
  return { post, comments }
}

const PostDetails = () => {
  const { postId } = useParams<Parameters>()
  const { post, comments } = useLoaderData() as API_DATA

  if (postId !== undefined) {
    getPost(+postId).then((response) => response)
  }

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
            {comments?.map((comment: Comment) => (
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
