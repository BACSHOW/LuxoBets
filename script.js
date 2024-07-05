document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    function updateCarousel() {
        for (let i = 0; i < totalItems; i++) {
            items[i].classList.remove('active', 'prev', 'next');
        }

        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        const nextIndex = (currentIndex + 1) % totalItems;

        items[currentIndex].classList.add('active');
        items[prevIndex].classList.add('prev');
        items[nextIndex].classList.add('next');

        // Centraliza o item ativo
        const activeItemWidth = items[currentIndex].offsetWidth;
        const innerWidth = carouselInner.offsetWidth;
        const translateX = (innerWidth - activeItemWidth) / 2 - items[currentIndex].offsetLeft;
        carouselInner.style.transform = `translateX(${translateX}px)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    document.querySelector('.carousel-button.next').addEventListener('click', nextImage);
    document.querySelector('.carousel-button.prev').addEventListener('click', prevImage);

    setInterval(nextImage, 3000); // Alterna a cada 3 segundos

    // Inicializa o carrossel
    updateCarousel();
});

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("banner");
    const closeButton = document.getElementById("closeButton");

    function showBanner() {
        banner.style.display = "block";
    }

    function closeBanner() {
        banner.style.display = "none";
    }

    setTimeout(showBanner, 5000);

    closeButton.addEventListener("click", closeBanner);
});
