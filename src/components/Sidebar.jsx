import foto from '../img/foto1.jpg'
import '../styles/components/sidebar.sass'
import Information from './Information'
import SocialNetworks from './SocialNetworks'


export default function Sidebar() {
    const curriculo = '/curriculo.docx'

    return (
        <aside id='sidebar'>
            <img src={foto} alt='Minha foto' />
            <p className='title'>Desenvolvedor Front-End</p>
            <SocialNetworks />
            <Information />
            <a href={curriculo} download={curriculo} className='btn'>Download currículo</a>
        </aside>
    )
}