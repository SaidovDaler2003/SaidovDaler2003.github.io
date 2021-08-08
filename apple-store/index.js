const toggleNav = document.querySelector('.toggle-nav')
const burger = document.querySelector('.header__burger')
const toggleNavCloseIcon = document.querySelector('.toggle-nav__close-icon')

burger.addEventListener('click', () => {
  toggleNav.classList.add('toggle-nav--opened')
})

toggleNavCloseIcon.addEventListener('click', () => {
  toggleNav.classList.remove('toggle-nav--opened')
})

