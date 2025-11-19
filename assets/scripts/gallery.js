        document.addEventListener("DOMContentLoaded", () => {
            const lightbox = document.getElementById("lightbox");
            const lightboxImage = document.getElementById("lightbox-image");
            const galleryItems = document.querySelectorAll("#gallery-container img");

            // 1. Открытие лайтбокса при клике на изображение
            galleryItems.forEach(img => {
                img.addEventListener("click", (e) => {
                    e.stopPropagation(); 
                    
                    // Устанавливаем источник и alt текст изображения
                    lightboxImage.src = img.src;
                    lightboxImage.alt = img.alt;
                    
                    // Показываем лайтбокс
                    lightbox.classList.add("active");
                });
            });

            // 2. Закрытие лайтбокса при клике на фон или нажатии ESC
            function closeLightbox() {
                if (lightbox.classList.contains("active")) {
                    lightbox.classList.remove("active");
                    // Стираем источник через 300мс, чтобы дать завершиться анимации
                    setTimeout(() => {
                        lightboxImage.src = "";
                        lightboxImage.alt = "";
                    }, 300); 
                }
            }

            // Закрытие при клике на оверлей или на само изображение
            lightbox.addEventListener("click", () => {
                // Теперь любой клик внутри оверлея (включая изображение) закроет его
                closeLightbox();
            });

            // Закрытие при нажатии клавиши ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            });
        });