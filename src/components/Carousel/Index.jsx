import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import imageRepo from "../../assets/img/code.jpg";

import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Carousel (props) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/HederAlves/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <>
      <div className="containerMainCarousel">
        <h1 className="titleContainer">
          Meus Projetos
        </h1>
        <Swiper
          className="bg-black xl:w-1/2"
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {" "}
          {repositories.map((repository) => {
            return (
              <SwiperSlide className="swiperSlide">
                <div className="headerCard">
                  <h1 className="titleCard">{repository.name}</h1>
                </div>
                <img className="px-12 py-6" src={imageRepo} alt="Imagem repositório" />
                <p className="textCard">
                 { repository.description }
                </p>
                <a
                  className="linkCard"
                  href={repository.html_url}
                  target="_blank"
                >
                  Veja o Repositório
                </a>
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
    </>
  );
}
