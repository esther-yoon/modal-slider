const toggleBtn = document.getElementById('toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

const open=document.getElementById('open');

open.addEventListener('click',e=>{

const signUp=document.querySelector('.signUp');

signUp.style.display='block';



})

const closeButton=document.getElementById('close');

closeButton.addEventListener('click',e=>{

    const signUp=document.querySelector('.signUp');
signUp.style.display='none'


})