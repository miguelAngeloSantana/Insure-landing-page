const mnMobile = window.document.getElementById("hamburguer");
const mnMenu = window.document.getElementById("menu-main");


mnMobile.addEventListener('click', () => {
    mnMobile.classList.toggle('show');
    mnMenu.classList.toggle('show');
});