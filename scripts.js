function mostrar(id) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach((seccion) => {
        seccion.style.display = "none";
    });

    // Muestra la sección seleccionada
    const activa = document.getElementById(id);
    if (activa) {
        activa.style.display = "block";
    }
}
