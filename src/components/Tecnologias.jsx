import React from 'react'
import { DiBootstrap, DiMysql,  DiGithub, DiCss3, DiHtml5, DiJavascript, DiPython, DiReact, DiSass } from 'react-icons/di'
import { SiTailwindcss, SiTypescript  } from 'react-icons/si'
import { BiLogoVuejs } from 'react-icons/bi'
import { FaWordpress  } from 'react-icons/fa'
import { TbBrandMysql } from "react-icons/tb";


const Tecnologias = () => {
    const tecInter = [
        {name: 'Html', icon: <DiHtml5 />,},
        {name: 'Css', icon: <DiCss3 />},
        {name: 'JavaScript', icon: <DiJavascript />},
        {name: 'TypeScript', icon: <SiTypescript />},
        {name: 'React', icon: <DiReact />},
        {name: 'Sass', icon: <DiSass />},
        {name: 'Tailwind', icon: <SiTailwindcss />},
    ]

    const tecBasico = [
        {name: 'Vue', icon: <BiLogoVuejs />},
        {name: 'Bootstrap', icon: <DiBootstrap />},
        {name: 'Python', icon: <DiPython />},
        {name: 'Wordpress', icon: <FaWordpress />},
        {name: 'Github', icon: <DiGithub />},
        {name: 'MySQL', icon: <TbBrandMysql />}
    ]

    return (
    <section className="tecnologias-container">
        <h2>Habilidades técnicas</h2>

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