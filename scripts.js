document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".menu-link");
    const expandButtons = document.querySelectorAll(".expand-btn");

    sections.forEach((section, index) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.3,
                ease: "power2.out",
            }
        );
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute("id");
                if (entry.isIntersecting) {
                    menuLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    expandButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const skillItem = event.target.closest(".skill-item");
            const details = skillItem.querySelector(".skill-details");

            if (details.style.display === "block") {
                details.style.display = "none";
                button.textContent = "+";
            } else {
                details.style.display = "block";
                button.textContent = "-";
            }
        });
    });

    const header = document.querySelector("header");
    gsap.fromTo(
        header,
        { opacity: 0, y: -50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
        }
    );

    const footer = document.querySelector("footer");
    gsap.fromTo(
        footer,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: sections.length * 0.3,
            ease: "power2.out",
        }
    );
});