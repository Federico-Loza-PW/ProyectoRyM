import './button.css'
import {Link} from 'react-router'
export default function ButtonsHome({contenido}) {

    return(
       
        <Link 
  to={contenido} 
  className="custom-button">
  {contenido}
    </Link>
    )
}