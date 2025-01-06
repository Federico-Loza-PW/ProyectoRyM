import './nav.css';
import {Link} from 'react-router'


export default function Navegation() {
    return(
        <nav className="nav-container">
  <h1 className="nav-title">
    <Link to="/">Rick & Morty</Link>
  </h1>
  <ul className="nav-links">
    <li>
      <Link to="/Characters" className="nav-button">
        Characters
      </Link>
    </li>
    <li>
      
        <Link to="/Contact" className='nav-button'>Contact</Link>
      
    </li>
  </ul>
</nav>
    )
}