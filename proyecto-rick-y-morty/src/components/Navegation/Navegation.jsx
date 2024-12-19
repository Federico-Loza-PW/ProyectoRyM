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
      <button className="nav-button">
        <Link to="/Characters" >Characters</Link>
      </button>
    </li>
    <li>
      <button className="nav-button">
        <Link to="/Contact">Contact</Link>
      </button>
    </li>
  </ul>
</nav>
    )
}