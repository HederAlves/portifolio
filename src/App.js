import { Header } from "./components/Header/Header"
import gifBanner from './assets/gif/gif-banner.gif'
import setaDireita from './assets/icon/seta-direita.png'
import setaEsquerda from './assets/icon/seta-esquerda.png'

export default function App() {

  return (
    <>
      <Header></Header>
      <section  className='flex justify-center gap-10 mt-5'>
        <button><img src={ setaEsquerda } /></button>
        <div className='flex justify-center shadow-lg w-2/3'>
        <img className='w-full h-[350px]' src={gifBanner} alt="Desenho de colaboradores" />
        </div>
        <button><img src={ setaDireita }/></button>
      </section>
    </>
  )
}