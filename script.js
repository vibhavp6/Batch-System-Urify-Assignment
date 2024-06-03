const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
  window.print();
});

// active links

const links = document.querySelectorAll(".nav-links li");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}

//  dark mode / light mode

const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// hamburger

const hamburgerBtn = document.querySelector(".menu");
const link = document.querySelector(".links");
hamburgerBtn.addEventListener("click", () => {
  link.classList.toggle("show");
});
