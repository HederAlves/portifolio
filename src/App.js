import { Header } from "./components/Header/Index"
import { Footer } from "./components/Footer/Footer"
import { Carousel } from "./components/Carousel/Carousel"
import {Banner} from "./components/Banner/Banner"

export default function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Carousel></Carousel>
      <Footer></Footer>
    </>
  )
}