document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typing-text");
  const text = "En proceso de ser desarrollador Java."; // Texto que se escribirá
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingText.innerHTML += text[index];
      index++;
      setTimeout(typeEffect, 100); // Velocidad de escritura (100ms por letra)
    } else {
      typingText.style.borderRight = "none"; // Ocultar el cursor después de escribir
    }
  }

  typeEffect(); // Iniciar animación de escritura
});
