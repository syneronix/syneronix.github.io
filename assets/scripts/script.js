// Добавляем favicon
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/x-icon";
favicon.href = window.location.pathname.includes("gallery") || window.location.pathname.includes("privacy") || window.location.pathname.includes("terms")
  ? "../favicon.ico"
  : "favicon.ico";
document.head.appendChild(favicon);

const viewport = document.createElement("meta");
viewport.name = "viewport";
viewport.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(viewport);


const description = document.createElement("meta");
description.name = "Syneronix CryptoBook";
description.content = "Syneronix CryptoBook";
document.head.appendChild(description);

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



window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
