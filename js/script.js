console.log("This is Hashib Website");

const navLinks = document.querySelector(".nav__links");
const hamOpen = document.querySelector("#ham__open");
const hamClose = document.querySelector("#ham__close");
const allLinks = [...document.querySelectorAll(".nav__links > li")];

const close = () => {
  navLinks.classList.remove("active");
  hamClose.classList.remove("active");
  hamOpen.classList.add("active");
};
close();

const open = () => {
  navLinks.classList.add("active");
  hamClose.classList.add("active");
  hamOpen.classList.remove("active");
};

allLinks.forEach((ele) =>
  ele.addEventListener("click", () => {
    const width = window.innerWidth;
    if (width > 870) return;
    close();
  })
);

hamOpen.addEventListener("click", open);
hamClose.addEventListener("click", close);
