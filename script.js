var modal = document.getElementById("miModal");
var btn = document.getElementById("btnReservar");
var span = document.getElementsByClassName("cerrar")[0];
const botones = document.querySelectorAll(".btnAlquilar");
const inputVehiculo = document.getElementById("vehiculo");
const btnReserva = document.getElementById("btnReservar")

//Evtos para los botones de alquilar los vehiculo y salga el formulario
btn.addEventListener("click", function() {
  modal.style.display = "block";
});


botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const contenedor = boton.closest(".card-car");
    const nombreCarro = contenedor.querySelector(".card-title").textContent;

    
    inputVehiculo.value = nombreCarro

    // Mostrar el modal
    modal.style.display = "block";

    // También puedes mostrar el nombre del carro dentro del modal
    const tituloModal = document.getElementById("tituloModal");
    if (tituloModal) {
      tituloModal.textContent = `Reservar: ${nombreCarro}`;
    }
  });
});


span.onclick = function() {
  modal.style.display = "none";
};

//libreria de swuialert para la notificaiones 

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  Swal.fire({
    title: "¡Reserva confirmada!",
    text: "Tu vehículo ha sido reservado con éxito, Nuestro agente se comunicara con usted.",
    icon: "success",
    confirmButtonText: "Cerrar"
  });

  modal.style.display = "none";

  this.reset();
});


//cargar los evento en el dom
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

