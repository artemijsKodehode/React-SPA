import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  Navigate
} from 'react-router-dom'

import LandingPage from './routes/LandingPage'
import AboutPage from './routes/about/AboutPage'
import Project from './routes/project/Project'
import Reference from './routes/project/Reference/Reference'

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

function App() {
  return (

    <Router>

      <Routes>

        <Route path='/' element={<Navbar />}>

          <Route index element={<LandingPage />} />

          <Route path='about' element={<AboutPage />} />

          <Route path='project' element={<Project />}>

          <Route path='reference' element={<Reference />} />

          </Route>

        </Route>

        <Route path='*' element={<h1>Error 404</h1>} />
        
      </Routes>

    </Router>
  )
}

export default App