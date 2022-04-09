const mnMobile = window.document.getElementById("hamburguer");
const mnMenu = window.document.getElementById("menu-main");
// const fd = window.document.getElementById("main");

// function mobileActive() {
//     if (mnMenu.style.display == 'flex') {
//         mnMenu.style.display = 'none';
//         fd.style.marginTop = '0'
//         mnMobile.setAttribute('src', 'images/icon-hamburger.svg')
//     } else {
//         mnMenu.style.display = 'flex';
//         fd.style.marginTop = '340px'
//         mnMobile.setAttribute('src', 'images/icon-close.svg')
//     }
// }

// mnMobile.addEventListener('click', mobileActive)

mnMobile.addEventListener('click', () => {
    mnMobile.classList.toggle('show');
    mnMenu.classList.toggle('show');
});