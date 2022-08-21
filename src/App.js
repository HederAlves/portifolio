import { Header } from "../src/components/Header"
import gifBanner from './assets/gif/gif-banner.gif'

export default function App() {

  return (
    <>
      <Header></Header>
      <section className='flex justify-center'>
        <img className='w-1/2 h-[250px]' src={gifBanner} alt="Desenho de colaboradores" />
      </section>
    </>
  )
}