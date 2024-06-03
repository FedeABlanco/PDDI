document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            
            // Validación básica del formulario
            if (name && email && message) {
                alert(`Gracias por contactarnos, ${name}! Hemos recibido tu mensaje.`);
                form.reset();
            } else {
                alert("Por favor, completa todos los campos.");
            }
        });
    }

    // Cambiar el fondo del header al hacer scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
