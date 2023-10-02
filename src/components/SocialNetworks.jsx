import '../styles/components/socialNetworks.sass'

import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const SocialNetworks = () => {

    const socialNetworks = [
        { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/diógenes-barreto-3b7b97241' },
        { name: 'github', icon: <FaGithub />, link: 'https://github.com/diogenesdev7' }
    ]

  return (
    <section className='section-networks'>
        {socialNetworks.map((network) => {
            return <div  key={network.name}>
                <a className='social-btn' href={network.link} id={network.name} target='_blank'>
                    {network.icon}
                </a>
            </div>
        })}
    </section>
  )
}

export default SocialNetworks