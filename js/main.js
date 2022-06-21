let btn = document.getElementById('button');
let share = document.querySelector('.container .text .share')
btn.addEventListener('click', () => {
  share.classList.toggle('active');
})