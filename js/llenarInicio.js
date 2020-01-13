(async function cargarComentarios(){
    async function getComentarios(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaComentarios= await getComentarios(`http://localhost:3000/api/obtenerUltimasCinco`);
    // debugger
    function ComentariosItemTemplate(comentario){
        return `<div class="item">
                    <h6>${comentario.nombrecategoria}</h6>
                    <a href="#">
                        <img src="${comentario.fotografia}" alt="">
                        <h4>${comentario.titulo}</h4>
                    </a>
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
    //     //   showModal($visita)
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
    const $containerComentarios = document.getElementById('containerUltimasCinco')
    renderComentarioList($listaComentarios, $containerComentarios)
})();

(async function cargarOtrasNotas(){
    async function getOtrasNotas(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaComentarios= await getOtrasNotas(`http://localhost:3000/api/obtenerOtrasNotas`);
    // debugger
    function ComentariosItemTemplate(comentario){
        return `<div class="noticia">
                    <img src="${comentario.fotografia}" alt="">
                    <div class="InfoNoti">
                        <a href="nodos/noticia.html"><h4 style="font-weight: bold; color: black;">${comentario.titulo}</h4> </a>
                        <h6 style="font-weight: bold;">${comentario.subtitulo}</h6>
                        <small>${comentario.fecha.substr(0,10)}</small>
                        <p>${comentario.texto}</p>
                    </div>
                    <hr>
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
    //     //   showModal($visita)
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
    const $containerComentarios = document.getElementById('masNoticias')
    renderComentarioList($listaComentarios, $containerComentarios)
})();