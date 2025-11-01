/* ======= Global Script for Portfolio ======= */

/* ========= ARTWORK PAGE MODAL ========= */
const artModal = document.getElementById("artModal");
if (artModal) {
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Descriptions for artwork
  const artDescriptions = {
    "Pictures/SocietyArt.JPG": "‘Society’ – explores the tension between individuality and conformity.",
    "Pictures/AbstractionArt.JPG": "‘Abstraction’ – a study of color, form, and rhythm.",
    "Pictures/The Team, My Dear.JPG": "‘The Team, My Dear’ – teamwork and creative collaboration.",
    "Pictures/20240821_090249.jpg": "‘Morning Light’ – capturing the serenity of a quiet dawn.",
    "Pictures/WrappedArt.JPG": "‘Wrapped’ – the intersection of texture and containment.",
    "Pictures/Behind the Scenes (1).png": "‘Behind the Scenes’ – process over perfection.",
    "Pictures/CowArt.png": "‘Pastoral Calm’ – a digital reimagining of rural life.",
    "Pictures/MemoriesArt.JPG": "‘Memories’ – the fragments that define who we are.",
    "Pictures/IMG_1009.JPG": "‘Experimentation’ – a test of texture and brush technique.",
    "Pictures/NewLightArt.JPG": "‘New Light’ – the optimism of rediscovery.",
    "Pictures/Reconnecting with Rockies' Gold.jpg": "‘Reconnecting with Rockies’ Gold’ – nature’s brilliance revisited."
  };

  // Click-to-open modal
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      artModal.style.display = "block";
      modalImg.src = img.src;
      // Match image source to description key
      const relativePath = img.src.split(window.location.origin + "/")[1];
      captionText.innerHTML = artDescriptions[relativePath] || img.alt;
    });
  });

  closeBtn.onclick = () => artModal.style.display = "none";
  artModal.onclick = e => { if (e.target === artModal) artModal.style.display = "none"; };
}

/* ========= SIMPLE IMAGE-ONLY CAROUSEL ========= */
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-images");
  const slides = carousel.querySelectorAll(".carousel-images img");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  let index = 0;

  function updateCarousel() {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    index--;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    index++;
    updateCarousel();
  });

  // Optional: click to open modal
  const modal = document.getElementById("photoModal");
  if (modal) {
    const modalImg = document.getElementById("photoModalImg");
    const caption = document.getElementById("photoCaption");
    const close = modal.querySelector(".close");

    slides.forEach((img, i) => {
      img.addEventListener("click", () => {
        index = i;
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.textContent = img.alt;
      });
    });

    close.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
});

/* ======= CAROUSELS WITH MODAL NAVIGATION ======= */
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-images");
  const slides = carousel.querySelectorAll("img");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  let index = 0;

  function updateCarousel() {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => { index--; updateCarousel(); });
  nextBtn.addEventListener("click", () => { index++; updateCarousel(); });

  // Modal setup
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("photoModalImg");
  const caption = document.getElementById("photoCaption");
  const close = modal.querySelector(".close");
  const modalPrev = modal.querySelector(".modal-prev");
  const modalNext = modal.querySelector(".modal-next");

 slides.forEach((slide, i) => {
  slide.addEventListener("click", () => {
    index = i; // start modal at clicked image
    modal.style.display = "block";
    modalImg.src = slide.src;
    caption.textContent = slide.alt;
  });
});

document.querySelectorAll(".carousel").forEach(carousel => {
  const slides = carousel.querySelectorAll(".slide");
  const track = carousel.querySelector(".carousel-images");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  let index = 0;

  function updateCarousel() {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => { index--; updateCarousel(); });
  nextBtn.addEventListener("click", () => { index++; updateCarousel(); });

  // Optional: modal support
  const modal = document.getElementById("photoModal");
  const modalContent = modal?.querySelector(".modal-content"); // make sure you have a modal in HTML
  const close = modal?.querySelector(".close");

  slides.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      if (!modal) return;
      index = i;
      modal.style.display = "block";

      // Clear previous content
      modalContent.innerHTML = "";
      // Clone clicked slide into modal
      const clone = slide.cloneNode(true);
      modalContent.appendChild(clone);
    });
  });

  if (close) close.addEventListener("click", () => modal.style.display = "none");
});

/* ========= CAROUSEL FUNCTIONALITY ========= */
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-images");
  const slides = Array.from(track.children);
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });
});


function updateModal() {
  modalImg.src = slides[index].src;
  caption.textContent = slides[index].alt;
}

  modalPrev.addEventListener("click", () => { index--; if(index < 0) index = slides.length - 1; updateModal(); });
  modalNext.addEventListener("click", () => { index++; if(index >= slides.length) index = 0; updateModal(); });

  close.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
});