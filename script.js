let ham = document.getElementById('ham')
let mobileMenu = document.getElementById('mobile-menu')

ham.addEventListener('click',clickedHam);

function clickedHam(){
    if(ham.getAttribute('src')==='imgs/icon-hamburger.svg'){
        ham.src = 'imgs/icon-close.svg';
        mobileMenu.style.display='flex';
        
    } else{
        ham.src = 'imgs/icon-hamburger.svg';
        mobileMenu.style.display='none';
        
    }
}