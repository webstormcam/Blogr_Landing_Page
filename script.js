let ham = document.getElementById('ham');
let mobileMenu = document.getElementById('mobile-menu');
let miniDrop = document.querySelectorAll('.small-drop-down');


for(let i=0;i<miniDrop.length;i++){
    miniDrop[i].addEventListener('click', handleClick);
        function handleClick(e){
            let el = e.currentTarget;
          if( el.children[1].classList.contains('drop-picked')){
                el.children[1].classList.remove('drop-picked');
                
            } else{
                el.children[1].classList.add('drop-picked')
            }
            for(let q=0;q<miniDrop.length;q++){
                if(miniDrop[q]!==el){
                  miniDrop[q].children[1].classList.remove('drop-picked');
                }
            }


    
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