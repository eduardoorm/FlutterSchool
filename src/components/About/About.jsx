import React from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init();
  return (
    <section id="about">
      <div className="containerAbout">
        <div className="textContainerAbout">
          <h1>ACERCA DE</h1>
          El GDG Ica y Flutter Ica se complacen en presentar el Flutter School,
          un evento de capacitación de alto nivel diseñado para aquellos
          interesados en sumergirse en el emocionante mundo de la programación
          de aplicaciones móviles. Este evento de vanguardia ofrece una
          oportunidad única para adquirir habilidades y conocimientos
          especializados en el desarrollo de aplicaciones para Android e iOS
          utilizando Flutter, el marco de desarrollo de aplicaciones móviles de
          vanguardia creado por Google.
          <p>
            El Flutter School se distingue por su enfoque riguroso y práctico. A
            través de una serie de sesiones intensivas, los participantes
            explorarán en profundidad los fundamentos de Flutter, desde su
            arquitectura hasta su sintaxis y sus componentes clave. Estas
            sesiones teóricas estarán respaldadas por talleres prácticos, donde
            los asistentes podrán aplicar de inmediato los conceptos aprendidos
            y trabajar en proyectos reales. Este enfoque práctico permitirá a
            los participantes fortalecer sus habilidades en el desarrollo de
            aplicaciones y enfrentar desafíos del mundo real.
          </p>
          <b>¡COMPLETAMENTE GRATUITO!.</b>


          <svg
            width="105"
            height="60"
            viewBox="0 0 105 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.96993 39.6019C6.47243 39.9787 5.16407 40.8894 4.29066 42.1629C3.41726 43.4363 3.03893 44.9849 3.22675 46.5176C3.41457 48.0503 4.15562 49.4617 5.31067 50.4865C6.46571 51.5114 7.95525 52.0792 9.49943 52.0833H26.9161C28.034 52.0826 29.1391 51.8451 30.1585 51.3864C31.178 50.9278 32.0888 50.2585 32.831 49.4225C33.5732 48.5865 34.1299 47.6028 34.4645 46.5362C34.799 45.4695 34.9039 44.3441 34.7722 43.234C34.6405 42.1239 34.2752 41.0543 33.7003 40.0955C33.1255 39.1368 32.3541 38.3106 31.4369 37.6715C30.5197 37.0324 29.4776 36.5947 28.3791 36.3874C27.2806 36.18 26.1506 36.2077 25.0636 36.4685L22.9578 37.0417"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M25.0618 36.4687C24.5206 34.3258 23.1849 32.4688 21.3253 31.2742C19.4658 30.0796 17.2215 29.6368 15.0476 30.0355C12.8737 30.4342 10.9326 31.6446 9.61804 33.4213C8.30344 35.1981 7.7136 37.4082 7.96811 39.6037C7.96811 39.6037 8.21036 41.0002 8.70594 41.7919"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M42.9699 17.6019C41.4724 17.9787 40.1641 18.8894 39.2907 20.1629C38.4173 21.4363 38.0389 22.9849 38.2267 24.5176C38.4146 26.0503 39.1556 27.4617 40.3107 28.4865C41.4657 29.5114 42.9553 30.0792 44.4994 30.0833H61.9161C63.034 30.0826 64.1391 29.8451 65.1585 29.3864C66.178 28.9278 67.0888 28.2585 67.831 27.4225C68.5732 26.5865 69.1299 25.6028 69.4645 24.5362C69.799 23.4695 69.9039 22.3441 69.7722 21.234C69.6405 20.1239 69.2752 19.0543 68.7003 18.0955C68.1255 17.1368 67.3541 16.3106 66.4369 15.6715C65.5197 15.0324 64.4776 14.5947 63.3791 14.3874C62.2806 14.18 61.1506 14.2077 60.0636 14.4685L57.9578 15.0417"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M60.0618 14.4687C59.5206 12.3258 58.1849 10.4688 56.3253 9.2742C54.4658 8.0796 52.2215 7.63676 50.0476 8.03547C47.8737 8.43417 45.9326 9.64458 44.618 11.4213C43.3034 13.1981 42.7136 15.4082 42.9681 17.6037C42.9681 17.6037 43.2104 19.0002 43.7059 19.7919"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M88.0625 19.1199C86.2741 19.1196 84.5312 19.6832 83.0815 20.7304C81.6319 21.7776 80.5492 23.2552 79.9875 24.953C79.9479 25.0903 79.881 25.2182 79.7908 25.3291C79.7006 25.44 79.589 25.5315 79.4626 25.5982C79.3362 25.6649 79.1977 25.7055 79.0553 25.7174C78.9129 25.7293 78.7695 25.7124 78.6338 25.6676C78.4981 25.6229 78.3728 25.5512 78.2654 25.4569C78.158 25.3626 78.0708 25.2476 78.0089 25.1187C77.947 24.9899 77.9117 24.85 77.9052 24.7072C77.8987 24.5644 77.921 24.4218 77.9709 24.2879C78.7085 22.0605 80.1624 20.1397 82.1059 18.8251C84.0493 17.5104 86.3732 16.8758 88.7151 17.0201C91.0571 17.1645 93.2854 18.0797 95.0528 19.623C96.8201 21.1664 98.0271 23.2511 98.4856 25.5523C100.088 25.7688 101.549 26.5864 102.572 27.8395C103.594 29.0926 104.102 30.6875 103.993 32.3012C103.883 33.9148 103.165 35.4266 101.982 36.5302C100.8 37.6338 99.2424 38.2467 97.625 38.2449H79.5625C79.2807 38.2449 79.0105 38.1329 78.8112 37.9337C78.6119 37.7344 78.5 37.4642 78.5 37.1824C78.5 36.9006 78.6119 36.6303 78.8112 36.4311C79.0105 36.2318 79.2807 36.1199 79.5625 36.1199H97.625C98.7522 36.1202 99.8333 35.6727 100.631 34.8758C101.428 34.079 101.876 32.9981 101.876 31.8709C101.876 30.7438 101.429 29.6627 100.632 28.8654C99.8352 28.0682 98.7543 27.6202 97.6271 27.6199H97.5719C97.3092 27.6215 97.0553 27.5257 96.8591 27.3511C96.6628 27.1765 96.5383 26.9353 96.5094 26.6743C96.2768 24.5967 95.2868 22.6777 93.7285 21.2841C92.1702 19.8905 90.153 19.12 88.0625 19.1199ZM70 41.4324C70 41.1506 70.1119 40.8803 70.3112 40.6811C70.5105 40.4818 70.7807 40.3699 71.0625 40.3699H90.1875C90.4693 40.3699 90.7395 40.4818 90.9388 40.6811C91.1381 40.8803 91.25 41.1506 91.25 41.4324C91.25 41.7142 91.1381 41.9844 90.9388 42.1837C90.7395 42.3829 90.4693 42.4949 90.1875 42.4949H71.0625C70.7807 42.4949 70.5105 42.3829 70.3112 42.1837C70.1119 41.9844 70 41.7142 70 41.4324Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <div className="imgFlutter"></div>
      </div>
    </section>
  );
};

export default About;
