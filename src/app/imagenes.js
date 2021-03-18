//importar logo

import logo from "./img/logoRealState.png";

//importar sliders
import slider1 from "./img/slider1.jpg";
import slider2 from "./img/slider2.jpg";
import slider3 from "./img/slider3.jpg";

//importar icono
import iconoReal from "./img/iconoRealState.ico";

//importar imagen quienes somos

import imgQuienes from "./img/quienes.jpg";

//importar imagen de bienes

import imgInmueble1 from "./img/inmueble1.jpg";
import imgInmueble2 from "./img/inmueble2.jpg";

const imagenes = () => {
  //selector del logo

  const selectorLogo = document.querySelector(".img__logo");

  //selectores del slider
  const imagenSlider1 = document.querySelectorAll(".slider")[0];
  const imagenSlider2 = document.querySelectorAll(".slider")[1];
  const imagenSlider3 = document.querySelectorAll(".slider")[2];

  //selector del  icono

  const icono = document.querySelector("link");

  //selector de la imagen quienes Somos

  const quienes = document.querySelector(".quienes__img");

  //selectores de imnuebles o bienes

  const inmueble1 = document.querySelectorAll(".card__img")[0];
  const inmueble2 = document.querySelectorAll(".card__img")[1];
  const inmueble3 = document.querySelectorAll(".card__img")[2];

  //agregar src al logo

  selectorLogo.src = logo;

  //agregar src al slider
  imagenSlider1.src = slider1;
  imagenSlider2.src = slider2;
  imagenSlider3.src = slider3;

  //agregar href al icono

  icono.setAttribute("href", iconoReal);

  //agregar src a quienes somos

  quienes.src = imgQuienes;

  //agregar src a inmuebles

  inmueble1.src = imgInmueble1;
  inmueble2.src = imgInmueble2;
  inmueble3.src = imgInmueble1;

  //lazy loading

  selectorLogo.setAttribute("loading", "lazy");

  imagenSlider1.setAttribute("loading", "lazy");
  imagenSlider2.setAttribute("loading", "lazy");
  imagenSlider3.setAttribute("loading", "lazy");

  icono.setAttribute("loading", "lazy");

  quienes.setAttribute("loading", "lazy");

  inmueble1.setAttribute("loading", "lazy");
  inmueble2.setAttribute("loading", "lazy");
  inmueble3.setAttribute("loading", "lazy");
};

export default imagenes;
