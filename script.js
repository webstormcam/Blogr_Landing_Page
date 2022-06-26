let ham = document.getElementById('ham');
let mobileMenu = document.getElementById('mobile-menu');
let miniDrop = document.querySelectorAll('.small-drop-down');


for(let i=0;i<miniDrop.length;i++){
    miniDrop[i].addEventListener('click', handleClick);
        function handleClick(e){
            let el = e.currentTarget;
            el = el.children[1]
            if (el.classList.contains('drop-picked')){
                el.classList.remove('drop-picked')
            } else{
                el.classList.add('drop-picked')
            }
            console.log(el)
        }
        
     
     

    
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