
====================================================
SCRIPT.JS
====================================================
document.getElementById('year').textContent = new Date().getFullYear();


const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', function(e){
e.preventDefault();
document.getElementById('formStatus').innerText = 'Message sent successfully!';
form.reset();
});}
