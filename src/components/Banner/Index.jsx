import gifBanner from "../../assets/gif/banner-centro.gif"
 
export function Banner (props)  {

  return (
    <>
      <div className="flex justify-center bg-black ">
        <img className="xl:w-1/2 xl:h-[250px]" src={ gifBanner } alt="Carousel" />  
      </div>
    </>
  )
}