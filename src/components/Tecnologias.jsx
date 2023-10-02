import React from 'react'
import { DiBootstrap, DiGithub, DiCss3, DiHtml5, DiJavascript, DiPython, DiReact, DiSass } from 'react-icons/di'
import { BiLogoVuejs } from 'react-icons/bi'

const Tecnologias = () => {
    const tecInter = [
        {name: 'Html', icon: <DiHtml5 />,},
        {name: 'Css', icon: <DiCss3 />},
        {name: 'JavaScript', icon: <DiJavascript />},
        {name: 'React', icon: <DiReact />},
        {name: 'Sass', icon: <DiSass />},
    ]

    const tecBasico = [
        {name: 'Vue', icon: <BiLogoVuejs />},
        {name: 'Bootstrap', icon: <DiBootstrap />},
        {name: 'Python', icon: <DiPython />},
        {name: 'Github', icon: <DiGithub />}
    ]

    return (
    <section className="tecnologias-container">
        <h2>Tecnologias</h2>

        <div className="tecnologias">
            <h3>Nível intermediário</h3> <br></br>
            {tecInter.map(tec => {
                return <div className='tecnologia' id={tec.name} key={tec.name}>
                            {tec.icon}
                            <p>{tec.name}</p>
                       </div>
            })}

            <h3>Nível básico</h3>
            {tecBasico.map((tec, index) => {
                return  <div className='tecnologia' id={tec.name} key={index}>
                            {tec.icon}
                            <p>{tec.name}</p>
                        </div>
            })}
        </div>

        <p></p>
    </section>

  )
}

export default Tecnologias