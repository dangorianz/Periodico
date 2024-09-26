const $agregarNotas = document.getElementById('contBtnAgregarNota'); 
const $cerrarSesion = document.getElementById('cerrarSesion'); 
const $logearse = document.getElementById('logearse'); 
const $formURL = document.getElementById('formURL'); 
const $formPortada = document.getElementById('formPortada'); 

if(sessionStorage.getItem('rol') != 1){
    $agregarNotas.innerHTML=''
    $logearse.style.display='block'
    $cerrarSesion.style.display='none'
    $formURL.style.display='none'
    $formPortada.style.display='none'
}
if(sessionStorage.getItem('rol')== 1){
    $formURL.style.display='block'
    $formPortada.style.display='block'
    $cerrarSesion.style.display='block'
    $logearse.style.display='none'
}
$cerrarSesion.addEventListener('click',()=>{
    sessionStorage.setItem('rol','')
    location.reload();
}) 