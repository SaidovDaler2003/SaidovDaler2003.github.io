function openNav() {
  nav.classList.remove('header-nav--closed');
  nav.classList.add('header-nav--opened');
  shade.classList.add('shade--shown');
}

function closeNav() {
  nav.classList.remove('header-nav--opened');
  nav.classList.add('header-nav--closed');
  shade.classList.remove('shade--shown');
}

shade.addEventListener('click', (e) => {
  e.stopPropagation();
  closeNav();
});

barsIcon.addEventListener('click', () => {
  openNav();
});

closeIcon.addEventListener('click', () => {
  closeNav();
});
