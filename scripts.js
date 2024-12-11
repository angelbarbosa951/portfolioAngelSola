document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".menu-link");

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
