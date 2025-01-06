import Navegation from '../../components/Navegation/Navegation'
import './contact.css'

export default function Contact() {
    return(
        <div>
        <Navegation />
           <main className='d-flex justify-content-center'>
            <div className='conteneiner-contact d-flex flex-column justify-content-center aling-items-center'>
           <div className='textos'>
                <h1 className='titulocon'>Contact</h1>
                    <h2>Leave us your information so we can contact you</h2>
                    </div>
                    <form className='container-form justify-content-md-center p-4'>
                       <div className='div-1 d-flex flex-column'> 
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name'/>
                        </div>

                        <div className='div-1 d-flex flex-column'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id='email'/>
                       </div>

                        <div className='div-2 d-flex flex-column  '>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message'></textarea>
                        </div>


                        <input className='botonsend' type='submit' value={"Send"}/>
                    </form>        
            </div>
            </main>
        </div>
        
    )
}

