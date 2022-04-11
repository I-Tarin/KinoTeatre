const modalWindow = document.querySelector('.modal')
const buttonsModal = document.querySelectorAll('.button-play')

buttonsModal.forEach((item, i) => {
  item.addEventListener('click', () => {
    // console.log('click')
    modalWindow.classList.add('active')
  })
})
modalWindow.addEventListener('click', () => {
  modalWindow.classList.remove('active')
})