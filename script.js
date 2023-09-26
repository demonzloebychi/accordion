const accordion = document.querySelector('.accordion__title');

if (accordion){
    accordion.addEventListener("click", function(e){
        accordion.classList.toggle('active');
    })};