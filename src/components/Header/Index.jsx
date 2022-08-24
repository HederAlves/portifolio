import imgPerfil from '../../assets/img/heder-dev.png'
import iconLinkedin from '../../assets/icon/icon-linkedin.png'
import iconGithub from '../../assets/icon/icon-github.png'
import iconInstagram from '../../assets/icon/icon-instagram.png'

  export function Header (props)  {

    var user = {
      linkedin:'https://www.linkedin.com/in/hederalves/',
      github:'https://github.com/HederAlves',
      instagram:'https://www.instagram.com/_hederalves/'
    }

    return (
      <>
      <header className='h-20 bg-black flex justify-between items-center px-10 pt-5'>
        <div className='flex items-center justify-around w-[350px]'>
        <img className="border-2 border-orange-900 bg-gradient-to-r from-yellow-400 via-orange-500 via-red-600 to-fuchsia-600 rounded-full w-16 h-14 p-1 m-5" src={imgPerfil} alt="Desenho de colaboradores" />
        <h1 className='font-extrabold text-orange-500 text-2xl'>Desenvolvedor Front-end</h1>
        </div>

        <ul className='flex justify-around w-52 items-center'>
          <li><a href={user.linkedin}><img className="border-2 border-orange-900 hover:bg-gradient-to-r from-yellow-400 via-orange-500 via-red-600 to-fuchsia-600 rounded-full w-12 p-2" src={iconLinkedin} alt="Desenho de colaboradores" /></a></li>
          <li><a href={user.github}><img className="border-2 border-orange-900 hover:bg-gradient-to-r from-yellow-400 via-orange-500 via-red-600 to-fuchsia-600 rounded-full  w-12 p-2" src={iconGithub} alt="Desenho de colaboradores" /></a></li>
          <li><a href={user.instagram}><img className="border-2 border-orange-900 hover:bg-gradient-to-r from-yellow-400 via-orange-500 via-red-600 to-fuchsia-600 rounded-full w-12 p-2" src={iconInstagram} alt="Desenho de colaboradores" /></a></li>
        </ul>
      </header>
    </>

    )}