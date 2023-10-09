import React from 'react'

import '../styles/components/projetos.sass'
import guitar from '../img/guitarclasses.jpg'
import cinedatabase from '../img/cinedatabase1.jpg'
import todolist from '../img/todolist1.jpg'
import casas from '../img/casasedit.jpg'
import previsaoTempo from '../img/previsaodotempo1.jpg'
import calculadoraIMC from '../img/calculadoraIMC1.jpg'

const Projetos = () => {
  return (
    <section className="projetos-container">
        <h2>Projetos</h2>
        <div className="projetos-cards">
          <div className="projetos-card">
            <div className="projetos-card-image">
              <a href="https://diogenesdev7.github.io/html-css/guitar%20classes/" target='_blank'><img src={guitar} alt="aulas de guitarra" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/html-css/guitar%20classes/" target='_blank'><h4>Landing Page de Aulas de Música</h4></a>
              <p>Desenvolvido com Html e Sass</p>
            </div>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://cinedatabase.vercel.app/" target='_blank'><img src={cinedatabase} alt="cinedatabase" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://cinedatabase.vercel.app/" target='_blank'><h4>Site de Base de dados de filmes</h4></a>
              <p>Desenvolvido com React.js, Sass e Api</p>
            </div>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://diogenesdev7.github.io/todolist_react/" target='_blank'><img src={todolist} alt="todolist" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/todolist_react/" target='_blank'><h4>ToDo list</h4></a>
              <p>Desenvolvido com React.js</p>
            </div>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://diogenesdev7.github.io/html-css/casas_planejadas/" target='_blank'><img src={casas} alt="casas planejadas" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/html-css/casas_planejadas/" target='_blank'><h4>Site de planejamento de casas</h4></a>
              <p>Desenvolvido com Bootstrap</p>
            </div>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://diogenesdev7.github.io/previsao-do-tempo/" target='_blank'><img src={previsaoTempo} alt="casas planejadas" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/previsao-do-tempo/" target='_blank'><h4>Sistema de previsão do tempo </h4></a>
              <p>Desenvolvido com Vue.js</p>
            </div>
          </div>
          <div className="projetos-card">
            <div className="projetos-card-image">
            <a href="https://diogenesdev7.github.io/calculadoraIMC/" target='_blank'><img src={calculadoraIMC} alt="Calculadora IMC" /></a>
            </div>
            <div className="projetos-info-card">
            <a href="https://diogenesdev7.github.io/calculadoraIMC/" target='_blank'><h4>Calculadora IMC </h4></a>
              <p>Desenvolvido com Vue.js</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projetos