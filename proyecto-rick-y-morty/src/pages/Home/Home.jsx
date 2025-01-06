import ButtonsHome from '../../components/ButtonsHome/ButtonsHome'

import './home.css'


export default function Home() {
    return(
        <div className='d-flex justify-content-center align-items-center  text-align-center'>
            <div className='container fondo-blanco p-0'>
                    <h1 className="Titulo">Proyect Rick & Morty</h1>
                    <h2 className='Sub'>Welcome to Rick & Morty Proyect!</h2>  
                    <p className='row1'>This proyect was made for practising React and to made a functional website. </p> 

                    <p className='row2 mt-4'>In this website you can know information of the characters of this animated series. </p> 
                    
                    <p className='row3'>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                    </p>     
                    <h3 className='Sub2'>Lets go!</h3> 
                    <div className='d-flex w-100 justify-content-center '>
                        <ButtonsHome contenido="Characters"/>
                        <ButtonsHome contenido="Contact"/>           
                    </div>

                </div>        
        </div>
   

    )
}