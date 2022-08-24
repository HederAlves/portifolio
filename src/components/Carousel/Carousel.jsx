import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import imageRepo from "../../assets/img/image-repo.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Carousel() {
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
              <SwiperSlide className="flex flex-col text-center p-2 border-2 border-lime-500 hover:border-orange-500 my-5 rounded-md">
                <div className="p-2 bg-gradient-to-r from-yellow-400 via-orange-500 via-red-600 to-fuchsia-600">
                  <h1 className="font-extrabold text-xl">{repository.name}</h1>
                </div>
                <img className="" src={imageRepo} alt="Imagem repositório" />
                <p className="bg-white py-4">
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting.
                </p>
                <a
                  className="text-orange-500 hover:text-lime-500 pt-5 pb-2"
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
