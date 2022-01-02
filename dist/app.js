const hamburger = document.querySelector('.hamburger');
const show = document.querySelector('.show');
document.querySelector('.hamburger').addEventListener('click', () => {
	show.classList.toggle('menu-right');
});
