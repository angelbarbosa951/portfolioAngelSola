document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("show");
            menuToggle.focus(); // Vuelve el foco al botón del menú
        }
    });

    const expandButtons = document.querySelectorAll(".expand-btn");
    expandButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const parentItem = event.target.closest("li");
            const details = parentItem.querySelector(".skill-details, .experience-details, .project-details");

            if (details.style.display === "block") {
                details.style.display = "none";
                button.textContent = "+";
            } else {
                document.querySelectorAll(".skill-details, .experience-details, .project-details").forEach(detail => {
                    detail.style.display = "none";
                });
                document.querySelectorAll(".expand-btn").forEach(btn => {
                    btn.textContent = "+";
                });

                details.style.display = "block";
                button.textContent = "-";
            }
        });
    });
});
