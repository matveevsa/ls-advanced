const toggleOpen = document.querySelector('.header .toggle');
const toggleClose = document.querySelector('.popup-menu__toggle');
const popupMenu = document.querySelector('.popup-menu');
const menuLink = popupMenu.querySelectorAll('.socials__link');

toggleOpen.addEventListener('click', (e) => {
  e.preventDefault();
  popupMenu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

popupMenu.addEventListener('click', (e) => {
  let target = e.target;

  if (target == popupMenu
      || target == toggleClose
      || target.className == 'main-nav__link'
      || target.tagName == 'use'
      || target.tagName == 'svg') {
    popupMenu.style.display = 'none';
    document.body.style.overflow = '';
  };
});


