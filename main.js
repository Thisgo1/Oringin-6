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


function changeHeaderWhenScroll(){
  
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;
  
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  };
}

//testemonials slider
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
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
  footer .brand, footer .social`, { interval: 100 });

// back-to-top visibiliade do button

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top');

  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  } 
};


//funçoes de rolagem de pagina
window.addEventListener("scroll", () => {
  changeHeaderWhenScroll(),
  backToTop()
})
