let direccionURLEDI = 'https://diarionuevonorte.herokuapp.com';
// let direccionURLEDI = 'http://localhost:3000';

(async function cargarEditoriales(){
    async function getEditoriales(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaEditoriales= await getEditoriales(`${direccionURLEDI}/api/obtenerEditoriales`);
    // const $listaEditoriales= await getEditoriales(`http://localhost:3000/api/obtenerEditoriales`);
    // debugger
    function EditorialesItemTemplate(editorial){
        return `<div style="margin-bottom:25px;" class="card">
                    <a style="color: black; text-decoration: none; cursor: pointer;" href="editorial.html">
                      <img src="../img/Zona Norte blanco.jpg" class="card-img-top" alt="...">
                      <div class="card-body">
                        <div class="title">
                            <h6 style="color: #C21812; font-weight: bold;">${editorial.titulo}</h6>  
                        </div>
                        <p class="card-text">${editorial.descripcion.substr(0,100)} <a href="#">Ver mas ...</a></p>
                      </div>

                    </a>
                </div>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
    function addEventClick($element,$editorial) {
        // debugger
        $element.addEventListener('click', () => {
            sessionStorage.setItem('ideditorial',`${$editorial.ideditorial}`);
            sessionStorage.setItem('tituloEditorial',`${$editorial.titulo}`);
            sessionStorage.setItem('descripcionEditorial',`${$editorial.descripcion}`);
            sessionStorage.setItem('fraseEditorial',`${$editorial.fraserelevante}`);
            sessionStorage.setItem('fechaEditorial',`${$editorial.fecha.substr(0,10)}`);
            // sessionStorage.setItem('nombrecat',`${$editorial.nombrecategoria}`);
            // getComentarios(`http://localhost:3000/api/EliminarComentario/${$comentario.idcomentario}`);
            // alert(`comentario Eliminado`)
            location.reload();
        //   showModal($visita)
        })
    }
    function renderEditorialesList(listEditorila, $container){
        listEditorila.data.forEach(editorial => {
            debugger
            
          const HTMLString = EditorialesItemTemplate(editorial);
          const editorialElement = createTemplate(HTMLString);
        addEventClick(editorialElement,editorial);
          
          $container.append(editorialElement);
        });    
    }
    const $containerEditoriales = document.getElementById('contarinerEditoriales')
    renderEditorialesList($listaEditoriales, $containerEditoriales)
})();

document.getElementById('btnAgregarEditorial').addEventListener('click',()=>{
    var t = new Date;
    let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`

    const url = `${direccionURLEDI}/api/InsertarEditorial`
    // const url = 'http://localhost:3000/api/InsertarEditorial'
        const data = {};
        data.titulo = document.getElementById('tituloEditorial').value
        data.descripcion = document.getElementById('descripcionEditorial').value
        data.fraserelevante = document.getElementById('fraseEditorial').value
        data.fecha = fecha
        data.idusu = sessionStorage.getItem('idUsuario');

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