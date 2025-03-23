document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mob-menu');
  const drop = document.querySelector('.drop');
  const mobMenuCloseBtn = document.querySelector('.mob-menu-button');
  const mobMenuOpenBtn = document.querySelector('.menu-toggle');

  const body = document.body;

  mobMenuOpenBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-opened');
    drop.classList.add('is-opened');
    body.classList.add('no-scroll');
  });

  mobMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-opened');
    drop.classList.remove('is-opened');
    body.classList.remove('no-scroll');
  });
  const mobMenuLinks = document.querySelectorAll('.mob-menu-link');

  mobMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-opened');
      drop.classList.remove('is-opened');
      body.classList.remove('no-scroll');
    });
  });
  document.addEventListener('click', event => {
    const isInside =
      mobileMenu.contains(event.target) ||
      mobMenuOpenBtn.contains(event.target) ||
      mobMenuCloseBtn.contains(event.target);

    if (!isInside) {
      mobileMenu.classList.remove('is-opened');
      drop.classList.remove('is-opened');
      body.classList.remove('no-scroll');
    }
  });
});
