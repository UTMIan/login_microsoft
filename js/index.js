document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("nextButton");
    const passwordForm = document.querySelector(".password-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Agrega un manejador de eventos al botón "Siguiente"
    nextButton.addEventListener("click", function() {
        // Oculta el botón "Siguiente" y el campo de correo
        nextButton.style.display = "none";
        emailInput.style.display = "none";

        // Muestra el campo de contraseña con animación
        passwordForm.style.maxHeight = "1000px"; // Establece la altura máxima
        passwordForm.style.animation = "slide-up 0.5s";

        // Enfoca el campo de contraseña
        passwordInput.focus();
    });
});
