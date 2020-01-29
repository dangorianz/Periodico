const $agregarNotas = document.getElementById('contBtnAgregarNota'); 
const $cerrarSesion = document.getElementById('cerrarSesion'); 
const $logearse = document.getElementById('logearse'); 

if(sessionStorage.getItem('rol') != 1){
    $agregarNotas.innerHTML=''
    $logearse.style.display='block'
    $cerrarSesion.style.display='none'
}
if(sessionStorage.getItem('rol')== 1){
    $cerrarSesion.style.display='block'
    $logearse.style.display='none'
}
$cerrarSesion.addEventListener('click',()=>{
    sessionStorage.setItem('rol','')
    location.reload();
}) 