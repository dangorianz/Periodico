document.getElementById('imgNota').src=localStorage.getItem('foto');
document.getElementById('textoNota').textContent=localStorage.getItem('texto');
document.getElementById('tituloNota').textContent=localStorage.getItem('titulo');
document.getElementById('subtituloNota').textContent=localStorage.getItem('subtitulo');
document.getElementById('textNotaLarga').textContent=localStorage.getItem('notalarga');
// document.getElementById('tituloNota').textContent=localStorage.getItem('titulo');

(async function cargarComentarios(){
    async function getComentarios(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    // const $listaComentarios= await getComentarios(`https://diarionuevonorte.herokuapp.com/api/obtenerCometarios/${localStorage.getItem('idnoticia')}`);
    const $listaComentarios= await getComentarios(`http://localhost:3000/api/obtenerCometarios/${localStorage.getItem('idnoticia')}`);
    // debugger
    function ComentariosItemTemplate(comentario){
        return `<div class="comentario">
                    <figure>
                        <img src="../img/dan.jpg" alt="">
                    </figure>
                    <div class="textoComentario">
                        <h6>${comentario.nombrepersona}  - <span><small>${comentario.fecha.substr(0,10)}</small></span><small></small></h6>
                        
                        <p>${comentario.texto}</p>
                        
                    </div>
                </div>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
    // function addEventClick($element,$comentario) {
    //     $element.addEventListener('click', () => {
    //         getComentarios(`http://localhost:3000/api/EliminarComentario/${$comentario.idcomentario}`);
    //         alert(`comentario Eliminado`)
    //         location.reload();
    //       showModal($visita)
    //     })
    // }
    function renderComentarioList(listComentario, $container){
        listComentario.data.forEach(comentario => {
            
          const HTMLString = ComentariosItemTemplate(comentario);
          const comentarioElement = createTemplate(HTMLString);

        //   addEventClick(comentarioElement.children[1].children[0],comentario);
          
          $container.append(comentarioElement);
        });    
    }
    const $containerComentarios = document.getElementById('containerComentarios')
    renderComentarioList($listaComentarios, $containerComentarios)
})();

document.getElementById('btnComentar').addEventListener('click',()=>{
    var t = new Date;
    let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`

    // const url = 'https://diarionuevonorte.herokuapp.com/api/IngresarComentario'
    const url = 'http://localhost:3000/api/IngresarComentario'
        const data = {};
        data.texto = document.getElementById('comentarioNoticia').value
        data.nombrepersona = document.getElementById('nombreC').value
        data.fecha = fecha
        data.idnoticia = localStorage.getItem('idnoticia')

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