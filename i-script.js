// ------navbar scrolled (transparent to black) effect------

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) { // adjust scroll distance if needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// carousal sliding


document.addEventListener('DOMContentLoaded', function () {
  const el = document.getElementById('homeCarousel');
  if (!el) return;
  const existing = bootstrap.Carousel.getInstance(el);
  if (existing) existing.dispose();

  //  mobile-friendly
  const carousel = new bootstrap.Carousel(el, {
    interval: 3000,   
    pause: false,     // don't pause on hover/touch (prevents mobile from stopping)
    touch: true,      // enable swipe on touch devices
    wrap: true
  });

  // Ensure it is cycling
  if (typeof carousel.cycle === 'function') carousel.cycle();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      try { carousel.cycle(); } catch (e) { }
    }, 2000);
  });
});

// scrolling effect
window.addEventListener('scroll', revealElements);
function revealElements() {
  document.querySelectorAll('.up').forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

// floating
const topButton = document.getElementById("top");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topButton.style.display = "flex";
  } else {
    topButton.style.display = "none";
  }
};

topButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};