import Navegation from '../../components/Navegation/Navegation'
import './contact.css'

export default function Contact() {
    return(
        <div>
        <Navegation />
            <div className='Container'>
                <h1>Contact</h1>
                    <p>Leave us your information so we can contact you</p>
                    <form>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name'/>

                        <label htmlFor='email'>Email</label>
                        <input type="email" id='email'/>

                        <label htmlFor='message'>Message</label>
                        <textarea id='message'></textarea>

                        <input type='submit' value={"Send"}/>
                    </form>        
            </div>
 
        </div>
        
    )
}

