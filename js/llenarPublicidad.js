(async function cargarPublicidades(){
    async function getPublicidades(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    // const $listaNotas= await getOtrasNotas(`https://diarionuevonorte.herokuapp.com/api/obtenerPublicidades`);
    const $listaPublicidades= await getPublicidades(`http://localhost:3000/api/obtenerPublicidades`);
    // debugger
    function PortadaItemTemplate(publicidad){
        debugger
        return `<div class="carousel-item ">
                    <img src="${publicidad.foto}" class="d-block w-100" alt="..." style="height:150px">
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
            
        })
    }
    function renderNotaList(listnota, $container){
        listnota.data.forEach(nota => {
            
          const HTMLString = PortadaItemTemplate(nota);
          const notaElement = createTemplate(HTMLString);

          
          $container.append(notaElement);
        });    
    }
    const $containerCarrousel = document.getElementById('containerCarrousel')
    renderNotaList($listaPublicidades, $containerCarrousel)
})();