import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "style.css";
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
      <div className="px-10 bg-black">
        <h1 className="font-extrabold text-cyan-400 text-center bg-black pt-8 text-3xl">
          Meus Projetos
        </h1>
        <Swiper
          className="bg-black"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
                <img src={imageRepo} alt="Imagem repositório" />
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
