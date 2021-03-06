//abre e fecha o menu ao clicar no incone//
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

//ao clicar em um item do menu, esconde o menu////

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

//mudar o header da pagina quando der scroll//

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

//testemonials slider
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// Scroll Reveal mostrar elementos ao scrollar a pagina////

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services .header, #services .card,
  #testimonials .header, #testimonials, .testimonial
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
);

// back-to-top visibiliade do button

function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

//menu ativo quando estiver nele
const sections = document.querySelectorAll("section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (let section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
  
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
    
    if(checkpointStart && checkpointEnd){
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
      } else {
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }

}

//fun??oes de rolagem de pagina
window.addEventListener("scroll", () => {
  activateMenuAtCurrentSection(),
  changeHeaderWhenScroll(), backToTop();
});
