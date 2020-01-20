const $btnAgregarEmpresa = document.getElementById('btnAgregarEmpresa')
const $btnAgregarPublicidad = document.getElementById('btnAgregarPublicidad')

let fotoPublicidad
document.getElementById("filePublicidad").addEventListener("change", getUrl);
function getUrl() {
  if (this.files && this.files[0]) {
      debugger
    var FR= new FileReader();
    FR.addEventListener("load", function(e) {
      document.getElementById("imgPublicidad").src  = e.target.result;
      fotoPublicidad = e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
}
(async function cargarEmpresas(){
    async function getEmpresas(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    // const $listaNoticias= await getEmpresas(`https://diarionuevonorte.herokuapp.com/api/obtenerEmpresas`);
    const $listaEmpresas= await getEmpresas(`http://localhost:3000/api/obtenerEmpresas`);
    // debugger
    function NoticiasItemTemplate(empresa){
        return `<option value="${empresa.idempresa}">${empresa.nombreempresa}</option>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
   
    function renderEmpresasList(listEmpresa, $container){
        listEmpresa.data.forEach(empresa => {
            
          const HTMLString = NoticiasItemTemplate(empresa);
          const empresaElement = createTemplate(HTMLString);

          
          $container.append(empresaElement);
        });    
    }
    const $containerEmpresa = document.getElementById('containerEmpresa')
    renderEmpresasList($listaEmpresas, $containerEmpresa)
})();


$btnAgregarEmpresa.addEventListener('click',()=>{
    alert(document.getElementById('nombreEmpresaP').value)
    
    // const url = 'https://diarionuevonorte.herokuapp.com/api/InsertarEmpresa'
    const url = 'http://localhost:3000/api/InsertarEmpresa'
        const data = {};
        data.nombreEmpresa = document.getElementById('nombreEmpresaP').value;

        let JSO = JSON.stringify(data)
        alert(JSO)
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => location.reload());
        // location.reload();
})
 
$btnAgregarPublicidad.addEventListener('click',()=>{

    const url = 'http://localhost:3000/api/InsertarPublicidad'
        const data = {};
        data.foto= fotoPublicidad;
        data.estado = 'V';
        data.tipo = document.getElementById('tipoPublicidad').value
        data.idEmpresa = document.getElementById('containerEmpresa').value;
        data.idCategoria = document.getElementById('categoriaPublicidad').value;

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