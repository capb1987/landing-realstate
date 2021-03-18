import axios from "axios";
import Splide from "@splidejs/splide";
import "../../node_modules/@splidejs/splide/dist/css/splide.min.css";

const Testimonio = async () => {
  try {
    const api = await axios("https://reqres.in/api/users?page=1");
    const nombre = document.querySelectorAll(".testimonio__nombre");
    const imagenes = document.querySelectorAll(".testimonio__img");
    const reacciones = document.querySelectorAll(".testimonio__reacciones");
    const comentarios = [
      "Excelente Servicio, Atentos a cualquier requerimiento",
      "Gran Calificación de lo mejor!!!",
      "Lo volveré a contratar experiencia y capacidad para venta de mi casa",
    ];

    const {
      data: { data },
    } = api;

    new Splide("#splide-testimonio", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      pauseOnHover: false,
      speed: 400,
    }).mount();

    for (let index = 0; index < 3; index++) {
      //agrega nombre dinamicamente
      const texto = document.createTextNode(
        `${data[index].first_name} ${data[index].last_name}`
      );
      nombre[index].appendChild(texto);

      //agrega imagen dinamicamente

      imagenes[index].src = data[index].avatar;

      //agregar comentarios Dinamicamente

      const coments = document.createTextNode(`${comentarios[index]}`);

      reacciones[index].appendChild(coments);
    }
  } catch (error) {
    console.log(error);
  }
};

export default Testimonio;
