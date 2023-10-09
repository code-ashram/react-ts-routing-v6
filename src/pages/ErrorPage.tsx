import { NavLink } from 'react-router-dom'

const ErrorPage = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </header>

    <h2>Error! no such post found</h2>
  </>
)

export default ErrorPage
