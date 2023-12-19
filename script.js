/** @format */

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("java");
    habilidades[1].classList.add("python");
    habilidades[2].classList.add("c-");
    habilidades[3].classList.add("c");
    habilidades[4].classList.add("sql");
    habilidades[5].classList.add("htmlcss");
    habilidades[6].classList.add("efectividad");
    habilidades[7].classList.add("trabajo");
    habilidades[8].classList.add("creatividad");
    habilidades[9].classList.add("dedicacion");
    habilidades[10].classList.add("adaptacion");
    habilidades[11].classList.add("resolutivo");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

function enviarCorreo() {
  var formData = $("#miFormulario").serialize();

  $.ajax({
    type: "POST",
    url: "enviar_correo.php", // Reemplaza con la URL de tu script del lado del servidor
    data: formData,
    success: function(response) {
      // Maneja la respuesta del servidor (puede ser una página de confirmación, etc.)
      console.log(response);
    },
    error: function(error) {
      // Maneja errores de la solicitud AJAX
      console.log(error);
    }
  });
}