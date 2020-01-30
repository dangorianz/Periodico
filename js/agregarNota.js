// let direccionURL = 'https://diarionuevonorte.herokuapp.com';
let direccionURL = 'http://localhost:3000';
const $agregarNota = document.getElementById('agregarNota')

let fotoNota
document.getElementById("fileNota").addEventListener("change", getUrl);
function getUrl() {
  if (this.files && this.files[0]) {
      //debugger
    var FR= new FileReader();
    FR.addEventListener("load", function(e) {
      document.getElementById("imgDocente").src  = e.target.result;
      fotoNota = e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
}

$agregarNota.addEventListener('click',()=>{
    var t = new Date;
    let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`

    const url = `${direccionURL}/api/IngresarNota`

        const data = {};
        data.titulo = document.getElementById('tituloNota').value
        data.subtitulo = document.getElementById('subtituloNota').value
        data.texto = document.getElementById('textoNota').value
        data.notalarga = document.getElementById('textoNotaLarga').value
        data.fotografia = fotoNota;
        data.frase = "Prueba Frase";
        data.fecha = fecha;
        data.idCategoria = document.getElementById('categoriaNota').value
        data.idUsu = sessionStorage.getItem('idUsuario')

        let JSO = JSON.stringify(data)
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => location.reload());
        
})