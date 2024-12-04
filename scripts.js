document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typing-text");
  const text = "En proceso de ser desarrollador Java"; // Texto que se escribirá
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingText.innerHTML = text.substring(0, index + 1); // Escribir letra por letra
      index++;
      setTimeout(typeEffect, 100); // Velocidad de escritura (100ms por letra)
    } else {
      // Al terminar la animación de escritura, agrega el cursor parpadeante
      const cursor = document.createElement("span");
      cursor.id = "cursor";
      cursor.textContent = "_";
      typingText.appendChild(cursor);
    }
  }

  typeEffect(); // Iniciar animación de escritura
});
