function abreMenu(){
    let menu = document.getElementById('menu-oculto');

    if(menu.style.display == 'none'){
       menu.style.display = 'flex';
    }else{ 
        menu.style.display = 'none'
    }
}