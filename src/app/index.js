/* Archivos Js que tienen las funciones respectivas de 
slider,testimonios, saltos y el menú respectivamente */
import Slider from "./slider";
import Testimonios from "./testimonios";
import Menu from "./menu";
import Salto from "./salto";
import formularioValidacion from "./formularioValidacion";
import animaciones from "./animaciones";
import imagenes from "./imagenes";
import ScrollTop from "./scrollTop";

/* Crear Fontawesome */

/* SE IMPORTA EL CSS EN EL WEBPACK */
import "./index.css";

/* SE IMPORTARÁ IMAGENES DE TODO EL SITIO */

imagenes();

//ejecuta los sliders
Slider();

//cambios del menu
Menu();

//se Carga el Scroll

ScrollTop();

//se trae por medio de axios los respectivos usuarios
Testimonios();

//se muestra los respectivos saltos
Salto();

//se valida el formulario si hay error o no
formularioValidacion();

//se anima los respectivos elementos
animaciones();
