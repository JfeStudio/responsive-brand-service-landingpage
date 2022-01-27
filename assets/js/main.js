// menu toggle
const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
});

// set menu navigation
const navigation = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  const visability = navigation.getAttribute("data-visible");

  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
    menuToggle.setAttribute("aria-expanded", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
    menuToggle.setAttribute("aria-expanded", false);
  }
});

// set scroll sticky
const scrollSticky = document.getElementById("header");

window.addEventListener("scroll", () => {
  scrollSticky.classList.toggle("sticky", window.scrollY > 80);
});

// slider what our clients say
const slider = new Swiper(".myclient", {
  slidesPerView: "auto",
  spaceBetween: 35,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
