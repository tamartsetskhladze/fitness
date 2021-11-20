
document.getElementById('send').addEventListener('click', function() {
   alert('thank you');
})


let navigationWraper = document.getElementById('navigationBlock');
let toggleButton = document.getElementById('BurgerIcon');


toggleButton.addEventListener('click',function() {
    navigationWraper.classList.toggle('active');
})