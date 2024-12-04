// Crear burbujas dinámicamente
const container = document.querySelector('.bubbles-container');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Posición y tamaño aleatorio
  const size = Math.random() * 100 + 20; // Tamaño entre 20px y 80px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;

  // Duración y retraso aleatorio
  const duration = Math.random() * 1 + 5; // Entre 5 y 10 segundos
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${Math.random() * 2}s`;

  container.appendChild(bubble);

  // Eliminar la burbuja después de la animación
  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
}

// Crear burbujas constantemente
setInterval(createBubble, 500);
