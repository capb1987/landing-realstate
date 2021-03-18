import Splide from "@splidejs/splide";
import "../../node_modules/@splidejs/splide/dist/css/splide.min.css";

const Slider = () => {
  new Splide("#splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 500,
  }).mount();
};

export default Slider;
