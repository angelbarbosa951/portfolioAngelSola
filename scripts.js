document.addEventListener("DOMContentLoaded", () => {
    const expandButtons = document.querySelectorAll(".expand-btn");
    const container = document.querySelector(".container");

    expandButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const parentItem = event.target.closest(".skill-item");
            const details = parentItem.querySelector(".skill-details");

            // Si ya está expandido, colapsar
            if (details.style.display === "block") {
                details.style.display = "none"; // Ocultar detalles
                button.textContent = "+"; // Cambiar texto del botón
                parentItem.classList.remove("expanded"); // Quitar la clase destacada
                container.classList.remove("translucent"); // Quitar la clase translúcida
            } else {
                // Cerrar cualquier detalle abierto previamente
                document.querySelectorAll(".skill-details").forEach(detail => {
                    detail.style.display = "none";
                });

                // Quitar la clase "expanded" de otros elementos
                document.querySelectorAll(".expanded").forEach(item => {
                    item.classList.remove("expanded");
                });

                // Abrir el detalle actual
                details.style.display = "block";
                button.textContent = "-";
                parentItem.classList.add("expanded");

                // Aplicar efecto translúcido al resto
                container.classList.add("translucent");
            }
        });
    });

    // Permitir cerrar al hacer clic fuera
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".expanded") && !event.target.closest(".expand-btn")) {
            document.querySelectorAll(".skill-details").forEach(detail => {
                detail.style.display = "none";
            });

            document.querySelectorAll(".expanded").forEach(item => {
                item.classList.remove("expanded");
            });

            container.classList.remove("translucent");
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show"); // Muestra u oculta el menú desplegable
        });

        // Cierra el menú cuando se hace clic en un enlace
        navLinks.addEventListener("click", (event) => {
            if (event.target.tagName === "A") {
                navLinks.classList.remove("show");
            }
        });
    });


});
