import { Comment, getComments } from '../api'
import { ActionFunctionArgs, NavLink, ParamParseKey, Params, useLoaderData, useParams } from 'react-router-dom'

type Parameters = {
  postId: string
}

const PathNames = {
  postDetail: '/posts/:postId'
} as const

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.postDetail>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }: Args) =>
  await getComments(Number(params.postId)).then((response) => response)

const Comments = () => {
  const { postId } = useParams<Parameters>()
  const comments = useLoaderData() as Comment[]

  postId && getComments(+postId).then((response) => response)

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>

      <main>
        <h3>Comments: </h3>

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

export default Comments
