let myBtn = document.querySelector('.btn');
let myMenu = document.querySelector('.menu');
myBtn.addEventListener('click',show);

function show() {
    myMenu.classList.toggle('empty');
}