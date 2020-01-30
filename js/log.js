$LogIn = document.getElementById('LogIn');
// let direccionURLA = 'https://diarionuevonorte.herokuapp.com';
let direccionURLA = 'http://localhost:3000';

async function logear(nombreUsuario, passUsuario){
    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaRoles= await getData(`${direccionURLA}/api/obtenerUsuario/${nombreUsuario}/${passUsuario}`);
    // const $listaRoles= await getData(`http://localhost:3000/api/obtenerUsuario/${nombreUsuario}/${passUsuario}`);
    // debugger
    if($listaRoles.data.length != 0){
        alert(`Bienvenido ${$listaRoles.data[0].nombres}`)
        sessionStorage.setItem('usuario',`${$listaRoles.data[0].nombres} ${$listaRoles.data[0].apellidos}`);
        sessionStorage.setItem('idUsuario',`${$listaRoles.data[0].idusu}`);
        sessionStorage.setItem('foto',`${$listaRoles.data[0].foto}`);
        sessionStorage.setItem('rol',`${$listaRoles.data[0].idrol}`);
        location.reload();
    }else{
        alert(`Usuario o contraseña Incorrectos`)
    }
    console.log($listaRoles)
}

$LogIn.addEventListener('click',()=>{
    logear(document.getElementById('usuarioLogin').value, document.getElementById('passLogin').value); 
})