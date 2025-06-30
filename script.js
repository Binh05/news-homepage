const menuBtn = document.getElementById('menu-btn')
const closeMenu = document.getElementById('close-menu')
const screent = document.querySelector('.container')
const overlayScreent = document.querySelector('.container.menu-open::before')

menuBtn.addEventListener('click', () => {
    screent.classList.add('menu-open')
})

closeMenu.addEventListener('click', () => {
    screent.classList.remove('menu-open')
})

screent.addEventListener('click', (e) => {
    if (e.target === screent) screent.classList.remove('menu-open')
})