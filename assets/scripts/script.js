// Добавляем все иконки и манифест
const basePath = window.location.pathname.includes("gallery") || window.location.pathname.includes("privacy") || window.location.pathname.includes("terms")
  ? "../"
  : "";

const head = document.head;

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/x-icon";
favicon.href = basePath + "favicon.ico";
head.appendChild(favicon);


const appleTouchIcon = document.createElement("link");
appleTouchIcon.rel = "apple-touch-icon";
appleTouchIcon.sizes = "180x180";
appleTouchIcon.href = basePath + "apple-touch-icon.png";
head.appendChild(appleTouchIcon);


const manifest = document.createElement("link");
manifest.rel = "manifest";
manifest.href = basePath + "site.webmanifest";
head.appendChild(manifest);


const viewport = document.createElement("meta");
viewport.name = "viewport";
viewport.content = "width=device-width, initial-scale=1.0";
head.appendChild(viewport);

const description = document.createElement("meta");
description.name = "Syneronix CryptoBook";
description.content = "Syneronix CryptoBook";
head.appendChild(description);

const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";
fontLink.rel = "stylesheet";
head.appendChild(fontLink);


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
