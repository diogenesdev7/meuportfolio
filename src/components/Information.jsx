import '../styles/components/information.sass'
import { AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

const Information = () => {
  
return (
    <section className="information">
        <div className="info-card">
            <a href="https://api.whatsapp.com/send?phone=5511957838967" target='_blank'>
                <BsWhatsapp id='phone-icon' className='link' />
            </a>
            <div>
                <h3>Telefone</h3>
                <p>(11) 95783-8967</p>
            </div>
        </div>

        <div className="info-card">
            <a href="mailto:diogenesguitar7@gmail.com" target='_blank'>
                <AiOutlineMail id='email-icon' />
            </a>
            <div>
                <h3>E-mail</h3>
                <p className='p-email'>diogenesguitar7@gmail.com</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>São Paulo - SP</p>
            </div>
        </div>
    </section>
  )
}

export default Information