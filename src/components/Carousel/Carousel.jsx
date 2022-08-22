import gifBanner from '../../assets/gif/gif-banner.gif'
import setaDireita from '../../assets/icon/seta-direita.png'
import setaEsquerda from '../../assets/icon/seta-esquerda.png'

  export function Carousel (props)  {

    return (

      <>
      <section  className='flex justify-center gap-10 mt-5'>
        <button><img src={ setaEsquerda } /></button>
        <div className='flex justify-center shadow-2xl shadow-black w-2/3'>
        <img className='w-full h-[350px]' src={gifBanner} alt="Desenho de colaboradores" />
        </div>
        <button><img src={ setaDireita }/></button>
      </section>
    </>

    )}
