const formularioValidacion = () => {
  const formulario = document.querySelector(".contacto__form");
  const nombre = document.querySelector(".input__nombre");
  const apellido = document.querySelector(".input__apellido");
  const correo = document.querySelector(".input__correo");
  const detalle = document.querySelector(".input__detalle");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validaciones();
  });

  const validaciones = () => {
    const valorNombre = nombre.value.trim();
    const valorApellido = apellido.value.trim();
    const valorCorreo = correo.value.trim();
    const valorDetalle = detalle.value.trim();

    if (
      valorNombre === "" ||
      valorApellido === "" ||
      valorCorreo === "" ||
      valorDetalle === ""
    ) {
      setError("Campos vacios, todos los campos deben ser llenados");
    } else {
      crearRegistro(valorNombre, valorApellido, valorCorreo, valorDetalle);
      limpiarFormulario();
    }
  };

  //funcion que ejecuta si hay errores

  const setError = (mensaje) => {
    const inputs = document.querySelectorAll(".input");
    const contacto = document.querySelector(".contacto");
    const errorMensaje = document.querySelector(".error");

    inputs.forEach((input) => input.classList.toggle("input--error"));

    errorMensaje.classList.toggle("mostrar-error");

    const mensajeError = document.createTextNode(mensaje);
    const { nodeValue } = mensajeError;
    errorMensaje.innerHTML = `${nodeValue}`;
    setTimeout(() => {
      errorMensaje.classList.remove("mostrar-error");
      inputs.forEach((quitarInput) =>
        quitarInput.classList.remove("input--error")
      );
    }, 5000);
  };

  const limpiarFormulario = () => {
    formulario.reset();
  };

  const crearRegistro = (nombre, apellido, correo, detalle) => {
    const registro = new Object();
    registro.nombre = nombre;
    registro.apellido = apellido;
    registro.correo = correo;
    registro.detalle = detalle;
    const usuarios = [registro];

    console.log(usuarios);
  };
};

export default formularioValidacion;
