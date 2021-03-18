const Menu = () => {
  const menu = document.querySelector("#mobile-menu");
  const menuNav = document.querySelector(".header__nav");
  const slider = document.querySelector(".contenido-principal__slider");

  menu.addEventListener("click", () => {
    menu.classList.toggle("activo");
    menuNav.classList.toggle("menu-activo");
    slider.classList.toggle("slider--activo");
  });

  let mq = window.matchMedia("(min-width:992px)");

  if (mq.matches) {
    menuNav.addEventListener("change", () => {
      menuNav.classList.remove("menu-activo");
    });
  }
};

export default Menu;
