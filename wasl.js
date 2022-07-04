
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
sr.reveal('.text', { delay: 200, origin: 'top' })
sr.reveal('.form-container form', { delay: 800, origin: 'left' })
sr.reveal('.heading', { delay: 800, origin: 'top' })
sr.reveal('.ride-container .box', { delay: 600, origin: 'top' })
sr.reveal('.service-container .box', { delay: 600, origin: 'top' })
sr.reveal('.about-container .box', { delay: 600, origin: 'top' })
sr.reveal('.reviews-container .box', { delay: 600, origin: 'top' })
sr.reveal('.newsletter .box', { delay: 600, origin: 'top' })


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let more = document.querySelectorAll('.more');
let i = 0;
for (i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function () {
    more[i].parentNode.classList.toggle('active')
  })
}