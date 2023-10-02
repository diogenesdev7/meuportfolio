import '../styles/components/mainContent.sass'
import About from './About'
import Tecnologias from './Tecnologias'
import Projetos from './Projetos'

export default function MainContent () {
    return (
        <main id='main-content'>
            <About />
            <Tecnologias />
            <Projetos />
        </main>
    )
}