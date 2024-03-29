import { DiBootstrap, DiGithub, DiCss3, DiHtml5, DiJavascript, DiPython, DiReact, DiSass } from 'react-icons/di'
import { SiReact, SiSass, SiTailwindcss, SiTypescript  } from 'react-icons/si'
import { BiLogoVuejs } from 'react-icons/bi'

import '../styles/components/projetos.sass'
import guitar from '../img/guitarclasses.jpg'
import cinedatabase from '../img/cinedatabase1.jpg'
import todolist from '../img/todolist1.jpg'
import casas from '../img/casasedit.jpg'
import previsaoTempo from '../img/previsaodotempo1.jpg'
import quest from '../img/queststore1.jpg'
import { FiExternalLink } from 'react-icons/fi'

const Projetos = () => {
  return (
    <section className="projetos-container">
        <h2>Projetos</h2>
        <div className="projetos-cards">
          <div className="projetos-card">
              <div className="projetos-card-image">
                <a href="https://queststorenext.vercel.app/" target='_blank'><img src={quest} alt="quest store" /></a>
              </div>
              <div className="projetos-info-card">
              <a href="https://queststorenext.vercel.app/" target='_blank'><h4>Loja virtual de games</h4></a>
                <div className="tec">
                  Nextjs, Typescript e Tailwind
                </div>
              </div>
                <a className='git-link' target='_blank' href="https://github.com/diogenesdev7/queststoremnext">
                  <FiExternalLink />
                </a>
          </div>

          <div className="projetos-card">
            <div className="projetos-card-image">
              <a href="https://diogenesdev7.github.io/html-css/guitar%20classes/" target='_blank'><img src={guitar} alt="aulas de guitarra" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/html-css/guitar%20classes/" target='_blank'><h4>Landing Page de Aulas de Música</h4></a>
              <p>Html e Sass</p>
            </div>
              <a className='git-link' href="https://github.com/diogenesdev7/html-css/tree/main/guitar%20classes" target="_blank">
                <FiExternalLink />
              </a>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://cinedatabase.vercel.app/" target='_blank'><img src={cinedatabase} alt="cinedatabase" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://cinedatabase.vercel.app/" target='_blank'><h4>Site de Base de dados de filmes</h4></a>
              <p>React, Sass e Api</p>
            </div>
              <a className='git-link' href="https://github.com/diogenesdev7/cinedatabase" target="_blank">
                <FiExternalLink />
              </a>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://diogenesdev7.github.io/todolist_react/" target='_blank'><img src={todolist} alt="todolist" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/todolist_react/" target='_blank'><h4>ToDo list</h4></a>
              <p>React</p>
            </div>
              <a className='git-link' href="https://github.com/diogenesdev7/todolist_react" target="_blank">
                <FiExternalLink />
              </a>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://diogenesdev7.github.io/html-css/casas_planejadas/" target='_blank'><img src={casas} alt="casas planejadas" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/html-css/casas_planejadas/" target='_blank'><h4>Site de planejamento de casas</h4></a>
              <p>Bootstrap</p>
            </div>
              <a className='git-link' href="https://github.com/diogenesdev7/html-css/tree/main/casas_planejadas" target="_blank">
                <FiExternalLink />
              </a>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://diogenesdev7.github.io/previsao-do-tempo/" target='_blank'><img src={previsaoTempo} alt="casas planejadas" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/previsao-do-tempo/" target='_blank'><h4>Sistema de previsão do tempo </h4></a>
              <p>Vue</p>
            </div>
              <a className='git-link' href="https://github.com/diogenesdev7/previsao-do-tempo" target="_blank">
                <FiExternalLink />
              </a>
          </div>
        </div>
    </section>
  )
}

export default Projetos