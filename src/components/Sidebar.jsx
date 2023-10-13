import foto from '../img/foto1.jpg'
import '../styles/components/sidebar.sass'
import Information from './Information'
import SocialNetworks from './SocialNetworks'
import curriculo from '../utils/curriculo.pdf'


export default function Sidebar() {
    return (
        <aside id='sidebar'>
            <img src={foto} alt='Minha foto' />
            <p className='title'>Desenvolvedor Front-End</p>
            <SocialNetworks />
            <Information />
            <a href={curriculo} download="curriculo.docx" className='btn'>Download currículo</a>
        </aside>
    )
}