const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

showSlide(currentSlide);

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Music control
const audio = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggleMusic");

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = "Matikan Musik 🎶";
  } else {
    audio.pause();
    toggleBtn.textContent = "Putar Musik 🎵";
  }
});
