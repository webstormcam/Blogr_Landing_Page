let ham = document.getElementById('ham');
let mobileMenu = document.getElementById('mobile-menu');
let miniDrop = document.querySelectorAll('.small-drop-down');


for(let i=0;i<miniDrop.length;i++){
    miniDrop[i].addEventListener('click',function(){
        console.log(miniDrop[i])
        let parent = miniDrop[i];
        parent.children[1].classList.add('drop-picked')

    });
}







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