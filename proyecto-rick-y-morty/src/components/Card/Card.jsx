import { useState } from "react"
import './card.css'

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)
    return(
        <div className='section-cards d-flex align-items-center  justify-content-center'>
            <div className="tarjetita card container-card flex-row justify-content-between align-items-center " >
            <div className="d-flex flex-column justify-content-between align-items-center">
                <img src={personaje.image}/>
                <h2>{personaje.name}</h2>
                <button 
                onClick={()=>setOcultar(false)} 
                className={ocultar?"btn-list d-block b-card w-117 btn-x-md d-flex  border border-0 m-2 rounded-3  align-self-end ":"d-none"}>Know More</button>            
            </div>
            { ocultar ?'':
                <div className="px-5 py-2 " >
                <button className="botonx" onClick={()=>setOcultar(true)}>X</button>
                    <div className=" textotarjeta container-item p-3 d-flex flex-column list-group-item ">
                    <ul className="list list-group">
                        <li className="container-item p-3 d-flex flex-column list-group-item fw-bold">Character Status {personaje.status}</li>
                        <li className="container-item p-3 d-flex flex-column list-group-item fw-bold"> Species {personaje.species}</li>
                        <li className="container-item p-3 d-flex flex-column list-group-item fw-bold">Origin {personaje.origin.name}</li>
                        <li className="container-item p-3 d-flex flex-column list-group-item fw-bold">Gender {personaje.gender}</li>
                    </ul>
                    </div>
                </div>}
            
                </div>
        </div>
    )
}