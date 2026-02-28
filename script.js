// Scroll suave (refuerzo adicional)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Resaltar sección activa en el navbar
document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section, header, aside");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Parallax en el banner
window.addEventListener("scroll", function() {
  const banner = document.querySelector(".banner");
  let scrollPos = window.scrollY;
  banner.style.backgroundPositionY = -(scrollPos * 0.3) + "px";
});
