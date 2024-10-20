// --------------------------
// Navbar Mobile
// --------------------------
function toggleMenu() {
    const menu = document.querySelector('.nav-list');
    menu.classList.toggle('open');
}

// --------------------------
// Redirecionamento em Links
// --------------------------
document.querySelector('.nav-list a[href="informacoes_aluno.html"]').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = 'informacoes.html'; // Redireciona para a página correta
});

// --------------------------
// Mobile Navbar Class
// --------------------------
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();