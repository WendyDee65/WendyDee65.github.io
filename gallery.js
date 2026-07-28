document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("photo-gallery");
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = document.querySelector(".lightbox-close");
  const previousButton = document.querySelector(".lightbox-previous");
  const nextButton = document.querySelector(".lightbox-next");

  if (!gallery || !lightbox || !lightboxImage) {
    console.error("The gallery or lightbox elements were not found.");
    return;
  }

  let currentImageIndex = 0;

  galleryImages.forEach((imagePath, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const image = document.createElement("img");
    image.src = imagePath;
    image.alt = `Vine In Line gallery photo ${index + 1}`;
    image.loading = "lazy";

    image.addEventListener("click", () => {
      openLightbox(index);
    });

    galleryItem.appendChild(image);
    gallery.appendChild(galleryItem);
  });

  function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = galleryImages[currentImageIndex];
    lightbox.classList.add("active");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
  }

  function showPreviousImage() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = galleryImages.length - 1;
    }

    lightboxImage.src = galleryImages[currentImageIndex];
  }

  function showNextImage() {
    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {
      currentImageIndex = 0;
    }

    lightboxImage.src = galleryImages[currentImageIndex];
  }

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", showPreviousImage);
  nextButton.addEventListener("click", showNextImage);

  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", event => {
    if (!lightbox.classList.contains("active")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showPreviousImage();
    }

    if (event.key === "ArrowRight") {
      showNextImage();
    }
  });
});