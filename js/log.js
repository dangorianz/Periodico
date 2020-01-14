$LogIn = document.getElementById('LogIn');

async function logear(nombreUsuario, passUsuario){
    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaRoles= await getData(`http://localhost:3000/api/obtenerUsuario/${nombreUsuario}/${passUsuario}`);
    // debugger
    if($listaRoles.data.length != 0){
        alert(`Bienvenido ${$listaRoles.data[0].nombres}`)
        localStorage.setItem('usuario',`${$listaRoles.data[0].nombres} ${$listaRoles.data[0].apellidos}`);
        localStorage.setItem('idUsuario',`${$listaRoles.data[0].idusu}`);
        localStorage.setItem('foto',`${$listaRoles.data[0].foto}`);
        localStorage.setItem('rol',`${$listaRoles.data[0].idrol}`);
        location.reload();
    }else{
        alert(`Usuario o contraseña Incorrectos`)
    }
    console.log($listaRoles)
}

$LogIn.addEventListener('click',()=>{
    logear(document.getElementById('usuarioLogin').value, document.getElementById('passLogin').value); 
})