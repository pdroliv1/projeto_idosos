const menuMobile =
document.getElementById('menu-mobile');
const navMenu = 
document.querySelector('.menu-nav');

menuMobile.addEventListener('click', () =>
{
    menuMobile.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-nav').forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('active');
        navMenu.classList.remove('active');
    });
});