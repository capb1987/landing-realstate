import "@fortawesome/fontawesome-free/js/all";
const ScrollTop = () => {
  /* scroll hacia arriba ocultar o no */
  const btnSubir = document.querySelector(".btnSubir");
  const subirImg = document.querySelector(".btn__subir");

  subirImg.setAttribute("loading", "lazy");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      btnSubir.classList.toggle("btnSubir--mostrar");
    } else {
      btnSubir.classList.remove("btnSubir--mostrar");
    }
  });
};

export default ScrollTop;
