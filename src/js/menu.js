document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mob-menu')
  const drop = document.querySelector('.drop')
  const mobMenuCloseBtn = document.querySelector('.mob-menu-button')
  const body = document.body

  mobMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-closed')
    drop.classList.add('is-closed')


  })

})