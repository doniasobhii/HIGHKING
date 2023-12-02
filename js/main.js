let nav = document.querySelector("nav");
window.onscroll = function () {
  if (this.scrollY >= 650) {
    nav.classList.remove("bg");
    nav.classList.add("bg-white");
  } else {
    nav.classList.add("bg");
    nav.classList.remove("bg-white");
  }
};
