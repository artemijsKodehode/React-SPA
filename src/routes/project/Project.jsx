import {Outlet, Link} from 'react-router-dom'
import styles from './layout.module.css'

function Project() {
  return (
    <div className={styles.page}>
      <h1>Project</h1>
      <p>Follow these steps to open a project page:</p>
      <p>1. Click on “Reference”</p>
      <p>2. Follow the link below</p>
      
      <nav>
        <ul>
          <Link to='reference'>Reference</Link>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Project 