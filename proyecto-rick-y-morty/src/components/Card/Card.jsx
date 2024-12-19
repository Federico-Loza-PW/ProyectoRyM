import { useState } from "react"
import './card.css'

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)
    return(
        <div className='d-flex gap-2 border rounded tarjeta border-3 bg-primary'>
            <div className="tarjeta">
            <div>
                <img src={personaje.image}/>
                <h2>{personaje.name}</h2>
                <button 
                onClick={()=>setOcultar(false)} 
                className={ocultar?"btn btn-warning":"d-none"}>Know More</button>            
            </div>
            { ocultar ?'':
                <div className="px-5 py-2" >
                <button onClick={()=>setOcultar(true)}>X</button>
                    <ul>
                        <li>Character Status {personaje.status}</li>
                        <li> Species {personaje.species}</li>
                        <li>Origin {personaje.origin.name}</li>
                        <li>Gender {personaje.gender}</li>
                    </ul>
                </div>}
            
                </div>
        </div>
    )
}