
let navigationBar = document.getElementById('navbar');
let toggleButton = document.getElementById('toggle-button');


toggleButton.addEventListener('click', function() {
    navigationBar.classList.toggle('active');
})