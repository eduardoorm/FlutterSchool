import React, { useEffect } from "react";
import "swiper/css/bundle";
import Swiper from "swiper/bundle";
import "./Carousel.css";
import ItemCarousel from "./ItemCarousel";
const Carousel = () => {
  useEffect(() => {
    // Inicializar Swiper
    new Swiper(".swiper-container", {
      // Opciones de configuración del carrusel
      // (puedes ajustarlas según tus necesidades)
      slidesPerView: 1,

      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 4000, // tiempo de espera entre desplazamientos en milisegundos
        disableOnInteraction: false, // habilitar/deshabilitar autoplay al interactuar con el carrusel
      },
    });
  }, []);

  return (
    <div className="containerCarousel">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Agrega aquí los elementos del carrusel */}

          <ItemCarousel
            color={"rgba(224, 247, 224, 0.718)"}
            txtComment={"Es una experiencia única llena de aprendizaje"}
            name={"Leonidas Esteban"}
            rol={"Google Developer Expert"}
          ></ItemCarousel>

          <ItemCarousel
            color={"rgba(247, 238, 219, 0.718)"}
            txtComment={"Aprendamos a construir una app móvil"}
            name={"Pierre Guillen"}
            rol={"Google Developer Expert"}
          ></ItemCarousel>

          <ItemCarousel
            color={"rgba(233, 183, 183, 0.718)"}
            txtComment={
              "Es una excelente oportunidad para expandir nuestros conocimientos"
            }
            name={"Midudev"}
            rol={"Google Developer Expert"}
          ></ItemCarousel>
          {/* ... */}
        </div>

        {/* Botones de navegación */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Carousel;
