// Добавляем favicon
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/x-icon";
favicon.href = window.location.pathname.includes("gallery") || window.location.pathname.includes("privacy") || window.location.pathname.includes("terms")
  ? "../favicon.ico"
  : "favicon.ico";
document.head.appendChild(favicon);

// Добавляем мета viewport
const viewport = document.createElement("meta");
viewport.name = "viewport";
viewport.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(viewport);

// Добавляем мета-описание
const description = document.createElement("meta");
description.name = "description";
description.content = "Официальный сайт проекта Syneronix.";
document.head.appendChild(description);

// Добавляем Google Fonts
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// Когда DOM готов — загружаем header и footer
document.addEventListener("DOMContentLoaded", () => {
  const basePath = window.location.pathname.includes("gallery") || window.location.pathname.includes("privacy") || window.location.pathname.includes("terms")
    ? "../"
    : "";

  // Загружаем header
  fetch(basePath + "parts/header.html")
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById("header");
      if (header) header.innerHTML = data;
    });

  // Загружаем footer
  fetch(basePath + "parts/footer.html")
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById("footer");
      if (footer) footer.innerHTML = data;
    });
});

// // Анимация появления изображений в галерее
// function revealGalleryImages() {
//   const images = document.querySelectorAll(".gallery img");
//   const options = {
//     threshold: 0.1,
//   };

//   const observer = new IntersectionObserver((entries, obs) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         obs.unobserve(entry.target);
//       }
//     });
//   }, options);

//   images.forEach(img => {
//     observer.observe(img);
//   });
// }

// // Lightbox просмотр изображения
// document.addEventListener("DOMContentLoaded", () => {
//     const lightbox = document.getElementById("lightbox");
//     const lightboxImg = lightbox.querySelector("img");
  
//     document.querySelectorAll(".gallery img").forEach(img => {
//       img.addEventListener("click", () => {
//         lightbox.classList.add("active");
//         lightboxImg.src = img.src;
//         lightboxImg.alt = img.alt;
//       });
//     });
  
//     lightbox.addEventListener("click", () => {
//       lightbox.classList.remove("active");
//       lightboxImg.src = "";
//     });
//   });
  

// После полной загрузки страницы
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  revealGalleryImages();
});
