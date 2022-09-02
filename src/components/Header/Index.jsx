import imgPerfil from '../../assets/img/heder-dev.png'
import iconLinkedin from '../../assets/icon/icon-linkedin.png'
import iconGithub from '../../assets/icon/icon-github.png'
import iconInstagram from '../../assets/icon/icon-instagram.png'

import "./style.css";

  export function Header  (props)  {

    var user = {
      linkedin:'https://www.linkedin.com/in/hederalves/',
      github:'https://github.com/HederAlves',
      instagram:'https://www.instagram.com/_hederalves/'
    }

    return (
      <>
      <header className='containerMainHeader'>
        <div className='containerTitleImage'>
        <img className='imageHeader' src={imgPerfil} alt="imagem de perfil"/>
        <h1 className='titleHeader'>Desenvolvedor Front-end</h1>
        </div>

        <ul className='containerContact'>
          <li><a href={user.linkedin}><img className="imageContact" src={iconLinkedin} alt="Desenho de colaboradores" /></a></li>
          <li><a href={user.github}><img className="imageContact" src={iconGithub} alt="Desenho de colaboradores" /></a></li>
          <li><a href={user.instagram}><img className="imageContact" src={iconInstagram} alt="Desenho de colaboradores" /></a></li>
        </ul>
      </header>
    </>
    )}