let cambiado = false;

function cambiarTexto() {
  const titulo = document.getElementById("titulo");

  if (cambiado) {
    titulo.innerHTML = "Albert";
  } else {
    titulo.innerHTML = "Has hecho clic 😄";
  }

  cambiado = !cambiado; // cambia true/false
}
