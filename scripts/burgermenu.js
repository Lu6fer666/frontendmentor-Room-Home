const burgerMenu = document.querySelector(".fa-solid.fa-bars");
const hiddenMenu = document.querySelector(".header__nav__navbar");

burgerMenu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("shown");
    burgerMenu.style.display = 'none';
    });


