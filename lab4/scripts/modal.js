var modalBtn = document.querySelector('.modal-button');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('active');
})

modalClose.addEventListener('click', function(){
  modalBg.classList.remove('active');
})