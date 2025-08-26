export function homeHeaderSlider() {
  // First, check if the specific element exists on the page
  const container = document.querySelector('.swiper-wrapper');
  if (!container) {
    // If the container doesn't exist, exit the function to avoid affecting other pages or functionalities
    return;
  }

  // Your slides data remains unchanged
  const slidesData = [
    { imgSrc: "public/home/header1.jpg", brand: "Persol", alt: "header image", overlayClass: " overlay1" },
    { imgSrc: "public/home/header2.webp", brand: "Tom Ford", alt: "header image", overlayClass: "overlay2" },
    { imgSrc: "public/home/header3.webp", brand: "Gucci", alt: "header image", overlayClass: "overlay3" },
    { imgSrc: "public/home/header4.jpg", brand: "Oakley", alt: "header image", overlayClass: "overlay4" },
    { imgSrc: "public/home/header5.jpg", brand: "Prada", alt: "header image", overlayClass: "overlay5" },
    { imgSrc: "public/home/header6.webp", brand: "Burberry", alt: "header image", overlayClass: "overlay6" },
  ];

  // Moved inside the function to ensure it only executes when the container is present
  function createSlidesFromJson(slideData) {
    slideData.forEach((slide, index) => {
      const slideEl = document.createElement('div');
      slideEl.classList.add('swiper-slide');

      slideEl.innerHTML = `
            <img src="${slide.imgSrc}" alt="${slide.alt}" loading="lazy">
            <div class="overlay ${slide.overlayClass}">
              <h4>${slide.brand}</h4>
              <a href="brands.html" class="m-flip js-flip">
                <span class="m-flip_item">Discover</span>
                <span class="m-flip_item">Discover</span>
              </a>
            </div>
          `;

      container.appendChild(slideEl);
    });
  }

  // This code now only runs if the `.swiper-wrapper` is present on the page
  document.addEventListener('DOMContentLoaded', function () {
    createSlidesFromJson(slidesData);
  });
}

// Call homeHeaderSlider function, or it could be exported and called from another script where it's imported
