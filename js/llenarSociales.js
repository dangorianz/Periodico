(async function cargarUltimasNoticias(){
    async function getUltimasNoticias(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaNoticias= await getUltimasNoticias(`http://localhost:3000/api/obtenerUltimasCincoSociales`);
    // debugger
    function NoticiasItemTemplate(noticia){
        return `<div class="item">
                    <h6>${noticia.nombrecategoria}</h6>
                    <h5 class="ultima">Ultimas Noticia</h5>
                    <a href="noticia.html">
                        <img src="${noticia.fotografia}" alt="">
                        <h4>${noticia.titulo}</h4>
                    </a>
                </div>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
    function addEventClick($element,$nota) {
        debugger
        $element.addEventListener('click', () => {
            localStorage.setItem('idnoticia',`${$nota.idnoticia}`);
            localStorage.setItem('titulo',`${$nota.titulo}`);
            localStorage.setItem('subtitulo',`${$nota.subtitulo}`);
            localStorage.setItem('texto',`${$nota.texto}`);
            localStorage.setItem('foto',`${$nota.fotografia}`);
            localStorage.setItem('frase',`${$nota.frase}`);
            localStorage.setItem('fecha',`${$nota.fecha}`);
            localStorage.setItem('nombrecat',`${$nota.nombrecategoria}`);
            // getComentarios(`http://localhost:3000/api/EliminarComentario/${$comentario.idcomentario}`);
            // alert(`comentario Eliminado`)
            // location.reload();
        //   showModal($visita)
        })
    }
    function renderNoticiaList(listnoticia, $container){
        listnoticia.data.forEach(noticia => {
            
          const HTMLString = NoticiasItemTemplate(noticia);
          const noticiaElement = createTemplate(HTMLString);
          addEventClick(noticiaElement,noticia);
          
          $container.append(noticiaElement);
        });    
    }
    const $containerNoticias = document.getElementById('containerUltimasCinco')
    renderNoticiaList($listaNoticias, $containerNoticias)
})();

(async function cargarOtrasNotas(){
    async function getOtrasNotas(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaNotas= await getOtrasNotas(`http://localhost:3000/api/obtenerOtrasNotasSociales`);
    // debugger
    function NotaItemTemplate(nota){
        return `<div class="noticia">
                    <img src="${nota.fotografia}" alt="">
                    <div class="InfoNoti">
                        <a href="nodos/noticia.html"><h4 style="font-weight: bold; color: black;">${nota.titulo}</h4> </a>
                        <h6 style="font-weight: bold;">${nota.subtitulo}</h6>
                        <small>${nota.fecha.substr(0,10)}</small>
                        <h5>${nota.nombrecategoria}</h5>
                        <p>${nota.texto}</p>
                    </div>
                    <hr>
                </div>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
    function addEventClick($element,$nota) {
        // debugger
        $element.addEventListener('click', () => {
            localStorage.setItem('idnoticia',`${$nota.idnoticia}`);
            localStorage.setItem('titulo',`${$nota.titulo}`);
            localStorage.setItem('subtitulo',`${$nota.subtitulo}`);
            localStorage.setItem('texto',`${$nota.texto}`);
            localStorage.setItem('foto',`${$nota.fotografia}`);
            localStorage.setItem('frase',`${$nota.frase}`);
            localStorage.setItem('fecha',`${$nota.fecha}`);
            localStorage.setItem('nombrecat',`${$nota.nombrecategoria}`);
            // getComentarios(`http://localhost:3000/api/EliminarComentario/${$comentario.idcomentario}`);
            // alert(`comentario Eliminado`)
            // location.reload();
        //   showModal($visita)
        })
    }
    function renderNotaList(listnota, $container){
        listnota.data.forEach(nota => {
            
          const HTMLString = NotaItemTemplate(nota);
          const notaElement = createTemplate(HTMLString);
    

            addEventClick(notaElement.children[1].children[0].children[0],nota);
          
          $container.append(notaElement);
        });    
    }
    const $containerNotas = document.getElementById('masNoticias')
    renderNotaList($listaNotas, $containerNotas)
})();