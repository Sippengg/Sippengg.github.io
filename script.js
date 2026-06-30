const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = [...document.querySelectorAll("section[id]")];

const setActiveNav = () => {
  const scrollPosition = window.scrollY + 120;

  for (const section of sections) {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (!link) continue;

    if (scrollPosition >= top && scrollPosition < bottom) {
      navItems.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      return;
    }
  }

  navItems.forEach((item) => item.classList.remove("active"));
};

window.addEventListener("scroll", setActiveNav, { passive: true });
setActiveNav();
