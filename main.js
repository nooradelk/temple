let title=document.querySelector('.title');
let ul=document.querySelector('ul');
let  reload= document.querySelector('.reload');

window.onload=function(){
    if(window.navigator.onLine){
        online()
    }else{
    offnline()
    }

}
window.addEventListener("online",function(){
    online();
});

window.addEventListener("offnline",function(){
    offnline();
});
reload.onclick=function(){
window.location.reload();
}

function online(){
    title.innerHTML='online Now';
    title.style.color='green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}

function offnline(){
    title.innerHTML='offline Now';
    title.style.color='#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}