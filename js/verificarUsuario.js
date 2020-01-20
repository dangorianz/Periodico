const $agregarNotas = document.getElementById('contBtnAgregarNota'); 
const $cerrarSesion = document.getElementById('cerrarSesion'); 
const $logearse = document.getElementById('logearse'); 

if(localStorage.getItem('rol') != 1){
    $agregarNotas.innerHTML=''
}
if(localStorage.getItem('rol') == ""){
    $cerrarSesion.style.display='none'
    $logearse.style.display='block'
}
if(localStorage.getItem('rol')== 1){
    $cerrarSesion.style.display='block'
    $logearse.style.display='none'
}

$cerrarSesion.addEventListener('click',()=>{
    localStorage.setItem('rol','')
    location.reload();
}) 