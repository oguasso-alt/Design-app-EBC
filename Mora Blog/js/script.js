// Toggle de comentarios con animación
function toggleComments(id) {
  const elem = document.getElementById(id);
  if (elem.style.display === "block") {
    elem.style.display = "none";
  } else {
    elem.style.display = "block";
    elem.style.animation = "fadeIn 0.4s ease"; // animación suave
  }
}

// Like con cambio dinámico de estado
function likeFunction(button) {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    button.innerHTML = '<i class="fa fa-thumbs-up"></i> Me gusta';
  } else {
    button.classList.add("liked");
    button.innerHTML = "✓ Te gusta";
    button.style.color = "#ff4dd2"; // acento neón
  }
}

// Abrir/cerrar modal con flex y animación
function toggleModal(id) {
  const modal = document.getElementById(id);
  if (modal.style.display === "flex") {
    modal.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => (modal.style.display = "none"), 300);
  } else {
    modal.style.display = "flex";
    modal.style.animation = "fadeIn 0.4s ease";
  }
}

// Scroll suave al inicio
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Animaciones extras */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes fadeOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
}
`;
document.head.appendChild(style);
