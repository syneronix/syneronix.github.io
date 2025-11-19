document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const galleryItems = document.querySelectorAll("#gallery-container img");

    galleryItems.forEach(img => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add("active");
        });
    });

    function closeLightbox() {
        if (lightbox.classList.contains("active")) {
            lightbox.classList.remove("active");
            setTimeout(() => {
                lightboxImage.src = "";
                lightboxImage.alt = "";
            }, 300);
        }
    }

    lightbox.addEventListener("click", () => {
        closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    revealGalleryImages();
});


// // Анимация появления изображений в галерее
function revealGalleryImages() {
  const images = document.querySelectorAll(".gallery img");
  const options = {
    threshold: 0.1,
  };
}
