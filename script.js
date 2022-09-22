const firstLink = document.querySelector('.features')
const secondLink = document.querySelector('.company')
const upArrow = document.querySelector('.up')
const downArrow = document.querySelector('.down')
const upArrow2 = document.querySelector('.up2')
const downArrow2 = document.querySelector('.down2')
const overlay = document.querySelector('.overlay')

const firstDrop = document.querySelector('.content')
const secondDrop = document.querySelector('.content-2')

firstLink.addEventListener('click', () => {
  firstDrop.classList.toggle('show')
  upArrow.classList.toggle('display')
  downArrow.classList.toggle('up')
})

secondLink.addEventListener('click', () => {
  secondDrop.classList.toggle('show')
  upArrow2.classList.toggle('display')
  downArrow2.classList.toggle('up')
})

const menuOpenBtn = document.querySelector('.mobile-menu-open')
const mobileMenu = document.querySelector('.mobile-menu')

menuOpenBtn.addEventListener('click', () => {
  menuOpenBtn.classList.toggle('close')
  mobileMenu.classList.toggle('open')
  document.body.classList.toggle('no-scroll')
  overlay.classList.toggle('block')
})

const firstMobileLink = document.querySelector('.mobile-features')
const secondMobileLink = document.querySelector('.mobile-company')
const arrow = document.querySelector('.arrow')
const arrow2 = document.querySelector('.arrow-2')
const dropContent = document.querySelector('.drop-content')
const dropContent2 = document.querySelector('.drop-content-2')

firstMobileLink.addEventListener('click', () => {
  arrow.classList.toggle('arrow-up')
  dropContent.classList.toggle('show')
})

secondMobileLink.addEventListener('click', () => {
  arrow2.classList.toggle('arrow-up')
  dropContent2.classList.toggle('show')
})