const navbarNav = document.getElementById("navMenu");
const navToggler = document.getElementById("navbarToggler");

if (navToggler) {
    navToggler.addEventListener("click", () => {
        navbarNav.classList.toggle("show");
    });
}